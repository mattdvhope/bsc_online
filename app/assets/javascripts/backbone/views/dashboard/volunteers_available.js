var VolunteersAvailableView = Backbone.View.extend({
  initialize: function() {
    this.$el.appendTo(".entire");
    Handlebars.registerPartial('skype_time_slot_checked', HandlebarsTemplates['dashboard/skype_time_slot_checked']);
    Handlebars.registerPartial('skype_time_slot_input', HandlebarsTemplates['dashboard/skype_time_slot_input']);
    Handlebars.registerPartial('skype_time_slot_span', HandlebarsTemplates['dashboard/skype_time_slot_span']);
    Handlebars.registerPartial('skype_time_slot_unchecked', HandlebarsTemplates['dashboard/skype_time_slot_unchecked']);
  },

  events: {
    'click .volunteer-profile-modal': function (e) {
      var volunteerFirstName = $(e.target)[0].dataset.firstName;
      var volunteerLastName = $(e.target)[0].dataset.lastName;
      var volunteerAge = $(e.target)[0].dataset.age;
      var volunteerGender = $(e.target)[0].dataset.gender;
      if (volunteerGender === "ผู้ชาย") { volunteerGender = "male" }
      if (volunteerGender === "ผู้หญิง") { volunteerGender = "female" }
      $(".modal-body #volunteer-first-name").text( volunteerFirstName );
      $(".modal-body #volunteer-last-name").text( volunteerLastName );
      $(".modal-body #volunteer-age").text( volunteerAge );
      $(".modal-body #volunteer-gender").text( volunteerGender );
      this.volunteer_id = $(e.target)[0].dataset.id;

      $("button#connect-with-volunteer").attr('data-id', this.volunteer_id);
      $("button#connect-with-volunteer").attr('data-firstname', volunteerFirstName);
      $("button#connect-with-volunteer").attr('data-lastname', volunteerLastName);
    },

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
        .then(function(slots) {
          return slots.sort(function (a, b) {
console.log("in then ordertime");
            return a.ordertime - b.ordertime;
          });
        })
        .then(function(slots) {
          return slots.sort(function (a, b) {
console.log("in then orderam");
            return a.orderam - b.orderam;
          });
        })
        .then(function(slots) {
          return slots.sort(function (a, b) {
console.log("in then orderday");
            return a.orderday - b.orderday;
          });
        })
        .then(function(slots) {
          volunteer.set({skype_time_slots: slots});
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
      return volunteer_available.fetch(); // in Rails constroller 'show' method, returning slots of that particular volunteer (not the volunteer himself)
    }
  } // render
});


