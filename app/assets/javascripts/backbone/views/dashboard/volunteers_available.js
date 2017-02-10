var VolunteersAvailableView = Backbone.View.extend({
  initialize: function() {
    this.$el.appendTo(".entire");
    Handlebars.registerPartial('skype_time_slot_checked', HandlebarsTemplates['dashboard/skype_time_slot_checked']);
    Handlebars.registerPartial('skype_time_slot_input', HandlebarsTemplates['dashboard/skype_time_slot_input']);
    Handlebars.registerPartial('skype_time_slot_span', HandlebarsTemplates['dashboard/skype_time_slot_span']);
    Handlebars.registerPartial('skype_time_slot_unchecked', HandlebarsTemplates['dashboard/skype_time_slot_unchecked']);

    Handlebars.registerHelper('genderTranslate', function(gender) {
      if(gender === "ผู้ชาย" || gender === "male") {
        return "เพศ: ผู้ชาย";
      } else if (gender === "ผู้หญิง" || gender === "female") {
        return "เพศ: ผู้หญิง";
      } else {
        return "เพศ: ไม่ทราบ";
      }
    });
  },

  events: {
    // 'click .volunteer-profile-modal': function (e) {
    //   var volunteerFirstName = $(e.target)[0].dataset.firstName;
    //   var volunteerLastName = $(e.target)[0].dataset.lastName;
    //   var volunteerAge = $(e.target)[0].dataset.age;
    //   var volunteerGender = $(e.target)[0].dataset.gender;
    //   if (volunteerGender === "ผู้ชาย") { volunteerGender = "male" }
    //   if (volunteerGender === "ผู้หญิง") { volunteerGender = "female" }
    //   $(".modal-body #volunteer-first-name").text( volunteerFirstName );
    //   $(".modal-body #volunteer-last-name").text( volunteerLastName );
    //   $(".modal-body #volunteer-age").text( volunteerAge );
    //   $(".modal-body #volunteer-gender").text( volunteerGender );
    //   this.volunteer_id = $(e.target)[0].dataset.id;

    //   var vol_slots = JSON.parse($(e.target)[0].dataset.slots);
    //   console.log(vol_slots);
    //   $("#slots-of-volunteer").append(JSON.stringify(vol_slots));


    //   $("button#connect-with-volunteer").attr('data-id', this.volunteer_id);
    //   $("button#connect-with-volunteer").attr('data-firstname', volunteerFirstName);
    //   $("button#connect-with-volunteer").attr('data-lastname', volunteerLastName);
    // },

    'click .checkers': function (e) {
      var view_context = this;
      var slot_id = parseInt($(e.target)[0].dataset.id);
      var volunteer_id = parseInt($(e.target)[0].dataset.volunteerId);
      var student_id = this.model.get('id');
      var student = this.model;
      if ($(e.target)[0].checked) {
        saveSlot(student_id, false)
        .then(function(result) {
          var span = $(e.target).next();
          $($(e.target).next()).fadeOut(400, function() {
            span.replaceWith($(view_context.template_for_slot_span({
              day: result.day,
              time_period: result.time_period,
              am_pm: result.am_pm,
              first_name: student.get("first_name")
            }) ).fadeIn(400) );
          });
        })
        .catch(function(error) {
          console.log(error);
        });
      } else if (!$(e.target)[0].checked) {
        saveSlot(null, true)
        .then(function(result) {
          var span = $(e.target).next();
          $($(e.target).next()).fadeOut(400, function() {
            span.replaceWith($(view_context.template_for_unchecked_slot_span({
              day: result.day,
              time_period: result.time_period,
              am_pm: result.am_pm
            }) ).fadeIn(400) );
          });
        })
        .catch(function(error) {
          console.log(error);
        });
      } // if - else

      function saveSlot(student_id, availability) {
        var slot = new SkypeTimeSlot({id: slot_id, student_id: student_id, available: availability});
        return new Promise(function(resolve, reject) {
          resolve(slot.save());
        });
      }
    },

    'click #connect-with-volunteer': function (e) {
      var volunteer_id = $(e.target)[0].dataset.id;
      var volunteer_first_name = $(e.target)[0].dataset.firstname;
      var volunteer_last_name = $(e.target)[0].dataset.lastname;
      var volunteer = new VolunteerForStudent({id: volunteer_id});
      volunteer.fetch({
        success: function (model, response, options) {
          console.log("success");
          swal({
            title: "Thank you!", //"สวัสดีครับ -- Thank you for connecting with the CEP Skype teacher!",
            text: volunteer_first_name + " " + volunteer_last_name + " will receive an email from CEP with your name and email on it, and will contact you soon.",
            timer: 20000,
            showConfirmButton: true,
            animation: "slide-from-top"
          });
          // $("entire-main").html(model.get("first_name"));

        },
        error: function (model, response, options) {
          console.log("error");
          swal({
            title: "Error with database",
            text: "Please click on the same person's name again.",
            timer: 20000,
            showConfirmButton: true,
            animation: "slide-from-top"
          });
          console.log(response);
        }
      });
    }

  },

  template:  HandlebarsTemplates['dashboard/volunteers_available'],

  template_for_slot_span:  HandlebarsTemplates['dashboard/skype_time_slot_span'],

  template_for_unchecked_slot_span:  HandlebarsTemplates['dashboard/skype_time_slot_unchecked'],

  no_volunteers: function() {
    var stu_num = this.collection.length
    if (stu_num === 0) { 
      return true
    }
    else {
      return false
    }
  },

  render: function() { // see page 32 in book, "JS with Promises"
    var view_context = this;
    function sequence(volunteers, callback) {
      return volunteers.reduce(function chain(promise, volunteer) {
        return promise.then(function () {
          return callback(volunteer);
        });
      }, Promise.resolve());
    }

    sequence(this.collection, function(volunteer) {
      return getVolunteerSlots(volunteer)
        .then(function(slots) { // convert to Thai lang/T.Z.

// console.log(volunteerIsInDaylightSavingsTime());


          slots.map(function(slot) {
            if (slot.day === "Sunday") {slot.day = "วันอาทิตย์";}
            if (slot.day === "Monday") {slot.day = "วันจันทร์";}
            if (slot.day === "Tuesday") {slot.day = "วันอังคาร";}
            if (slot.day === "Wednesday") {slot.day = "วันพุธ";}
            if (slot.day === "Thursday") {slot.day = "วันพฤหัสบดี";}
            if (slot.day === "Friday") {slot.day = "วันศุกร์";}
            if (slot.day === "Saturday") {slot.day = "วันเสาร์";}

if (volunteerIsInDaylightSavingsTime()) {
  console.log("in dst");
  if (slot.time_period === "12:00 - 1:00" && slot.am_pm === "AM EST") {slot.time_period = "11:00 - 12:00"; slot.am_pm = "น."}
  if (slot.time_period === "1:00 - 2:00" && slot.am_pm === "AM EST") {slot.time_period = "12:00 - 13:00"; slot.am_pm = "น."}
  if (slot.time_period === "2:00 - 3:00" && slot.am_pm === "AM EST") {slot.time_period = "13:00 - 14:00"; slot.am_pm = "น."}
  if (slot.time_period === "3:00 - 4:00" && slot.am_pm === "AM EST") {slot.time_period = "14:00 - 15:00"; slot.am_pm = "น."}
  if (slot.time_period === "4:00 - 5:00" && slot.am_pm === "AM EST") {slot.time_period = "15:00 - 16:00"; slot.am_pm = "น."}
  if (slot.time_period === "5:00 - 6:00" && slot.am_pm === "AM EST") {slot.time_period = "16:00 - 17:00"; slot.am_pm = "น."}
  if (slot.time_period === "6:00 - 7:00" && slot.am_pm === "AM EST") {slot.time_period = "17:00 - 18:00"; slot.am_pm = "น."}
  if (slot.time_period === "7:00 - 8:00" && slot.am_pm === "AM EST") {slot.time_period = "18:00 - 19:00"; slot.am_pm = "น."}
  if (slot.time_period === "8:00 - 9:00" && slot.am_pm === "AM EST") {slot.time_period = "19:00 - 20:00"; slot.am_pm = "น."}
  if (slot.time_period === "9:00 - 10:00" && slot.am_pm === "AM EST") {slot.time_period = "20:00 - 21:00"; slot.am_pm = "น."}
  if (slot.time_period === "10:00 - 11:00" && slot.am_pm === "AM EST") {slot.time_period = "21:00 - 22:00"; slot.am_pm = "น."}
  if (slot.time_period === "11:00 - 12:00" && slot.am_pm === "AM EST") {slot.time_period = "22:00 - 23:00"; slot.am_pm = "น."}

  if (slot.time_period === "12:00 - 1:00" && slot.am_pm === "PM EST") {slot.time_period = "0:00 - 1:00"; slot.am_pm = "น."}
  if (slot.time_period === "1:00 - 2:00" && slot.am_pm === "PM EST") {slot.time_period = "1:00 - 2:00"; slot.am_pm = "น."}
  if (slot.time_period === "2:00 - 3:00" && slot.am_pm === "PM EST") {slot.time_period = "2:00 - 3:00"; slot.am_pm = "น."}
  if (slot.time_period === "3:00 - 4:00" && slot.am_pm === "PM EST") {slot.time_period = "3:00 - 4:00"; slot.am_pm = "น."}
  if (slot.time_period === "4:00 - 5:00" && slot.am_pm === "PM EST") {slot.time_period = "4:00 - 5:00"; slot.am_pm = "น."}
  if (slot.time_period === "5:00 - 6:00" && slot.am_pm === "PM EST") {slot.time_period = "5:00 - 6:00"; slot.am_pm = "น."}
  if (slot.time_period === "6:00 - 7:00" && slot.am_pm === "PM EST") {slot.time_period = "6:00 - 7:00"; slot.am_pm = "น."}
  if (slot.time_period === "7:00 - 8:00" && slot.am_pm === "PM EST") {slot.time_period = "7:00 - 8:00"; slot.am_pm = "น."}
  if (slot.time_period === "8:00 - 9:00" && slot.am_pm === "PM EST") {slot.time_period = "8:00 - 9:00"; slot.am_pm = "น."}
  if (slot.time_period === "9:00 - 10:00" && slot.am_pm === "PM EST") {slot.time_period = "9:00 - 10:00"; slot.am_pm = "น."}
  if (slot.time_period === "10:00 - 11:00" && slot.am_pm === "PM EST") {slot.time_period = "10:00 - 11:00"; slot.am_pm = "น."}
  if (slot.time_period === "11:00 - 12:00" && slot.am_pm === "PM EST") {slot.time_period = "11:00 - 12:00"; slot.am_pm = "น."}
} else {
  console.log("not dst");
  if (slot.time_period === "12:00 - 1:00" && slot.am_pm === "AM EST") {slot.time_period = "12:00 - 13:00"; slot.am_pm = "น."}
  if (slot.time_period === "1:00 - 2:00" && slot.am_pm === "AM EST") {slot.time_period = "13:00 - 14:00"; slot.am_pm = "น."}
  if (slot.time_period === "2:00 - 3:00" && slot.am_pm === "AM EST") {slot.time_period = "14:00 - 15:00"; slot.am_pm = "น."}
  if (slot.time_period === "3:00 - 4:00" && slot.am_pm === "AM EST") {slot.time_period = "15:00 - 16:00"; slot.am_pm = "น."}
  if (slot.time_period === "4:00 - 5:00" && slot.am_pm === "AM EST") {slot.time_period = "16:00 - 17:00"; slot.am_pm = "น."}
  if (slot.time_period === "5:00 - 6:00" && slot.am_pm === "AM EST") {slot.time_period = "17:00 - 18:00"; slot.am_pm = "น."}
  if (slot.time_period === "6:00 - 7:00" && slot.am_pm === "AM EST") {slot.time_period = "18:00 - 19:00"; slot.am_pm = "น."}
  if (slot.time_period === "7:00 - 8:00" && slot.am_pm === "AM EST") {slot.time_period = "19:00 - 20:00"; slot.am_pm = "น."}
  if (slot.time_period === "8:00 - 9:00" && slot.am_pm === "AM EST") {slot.time_period = "20:00 - 21:00"; slot.am_pm = "น."}
  if (slot.time_period === "9:00 - 10:00" && slot.am_pm === "AM EST") {slot.time_period = "21:00 - 22:00"; slot.am_pm = "น."}
  if (slot.time_period === "10:00 - 11:00" && slot.am_pm === "AM EST") {slot.time_period = "22:00 - 23:00"; slot.am_pm = "น."}
  if (slot.time_period === "11:00 - 12:00" && slot.am_pm === "AM EST") {slot.time_period = "23:00 - 0:00"; slot.am_pm = "น."}

  if (slot.time_period === "12:00 - 1:00" && slot.am_pm === "PM EST") {slot.time_period = "0:00 - 1:00"; slot.am_pm = "น."}
  if (slot.time_period === "1:00 - 2:00" && slot.am_pm === "PM EST") {slot.time_period = "1:00 - 2:00"; slot.am_pm = "น."}
  if (slot.time_period === "2:00 - 3:00" && slot.am_pm === "PM EST") {slot.time_period = "2:00 - 3:00"; slot.am_pm = "น."}
  if (slot.time_period === "3:00 - 4:00" && slot.am_pm === "PM EST") {slot.time_period = "3:00 - 4:00"; slot.am_pm = "น."}
  if (slot.time_period === "4:00 - 5:00" && slot.am_pm === "PM EST") {slot.time_period = "4:00 - 5:00"; slot.am_pm = "น."}
  if (slot.time_period === "5:00 - 6:00" && slot.am_pm === "PM EST") {slot.time_period = "5:00 - 6:00"; slot.am_pm = "น."}
  if (slot.time_period === "6:00 - 7:00" && slot.am_pm === "PM EST") {slot.time_period = "6:00 - 7:00"; slot.am_pm = "น."}
  if (slot.time_period === "7:00 - 8:00" && slot.am_pm === "PM EST") {slot.time_period = "7:00 - 8:00"; slot.am_pm = "น."}
  if (slot.time_period === "8:00 - 9:00" && slot.am_pm === "PM EST") {slot.time_period = "8:00 - 9:00"; slot.am_pm = "น."}
  if (slot.time_period === "9:00 - 10:00" && slot.am_pm === "PM EST") {slot.time_period = "9:00 - 10:00"; slot.am_pm = "น."}
  if (slot.time_period === "10:00 - 11:00" && slot.am_pm === "PM EST") {slot.time_period = "10:00 - 11:00"; slot.am_pm = "น."}
  if (slot.time_period === "11:00 - 12:00" && slot.am_pm === "PM EST") {slot.time_period = "11:00 - 12:00"; slot.am_pm = "น."}
}
}); // map

return slots;
        }) // then
        .then(function(slots) {
          return slots.sort(function (a, b) {
            return a.ordertime - b.ordertime;
          });
        })
        .then(function(slots) {
          return slots.sort(function (a, b) {
            return a.orderam - b.orderam;
          });
        })
        .then(function(slots) {
          return slots.sort(function (a, b) {
            return a.orderday - b.orderday;
          });
        })
        .then(function(slots) {
          volunteer.set({skype_time_slots: slots});
// console.log(JSON.stringify(slots));
          volunteer.set({stringified_slots: JSON.stringify(slots)});
          view_context.$el.html(view_context.template({
            no_volunteers: view_context.no_volunteers(),
            volunteers: view_context.collection.toJSON(),
            first_name: view_context.model.get("first_name")
          }));
          return view_context;
        })
    })
    .catch(function (reason) {
      console.log(reason);
    });

    function getVolunteerSlots(volunteer) {
      var volunteer_available = new VolunteerAvailable({id: volunteer.get("id")});
      return volunteer_available.fetch(); // in Rails constroller 'show' method, returning slots of that particular volunteer that are available to the student/current_user (not the volunteer himself)
    }
  } // render
});


