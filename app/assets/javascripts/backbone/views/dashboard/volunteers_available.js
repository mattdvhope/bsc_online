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

    var any_slot_chosen = 0

    window.Handlebars.registerHelper('disableSomeSlots', function(context, options) {
      var ret = "";
      var one_slot_chosen = false;
      for(var i = 0; i < context.length; i++) {
        if (context[i].available == false) {
          one_slot_chosen = true;
          break;
        }
      }

      if (one_slot_chosen === true) {
        any_slot_chosen++
        for(var i=0, j=context.length; i<j; i++) {
          var $el = $(options.fn(context[i]));
          if (context[i].student_id) {
            $el.find('[data-volunteer-id=' + context[i].volunteer_id + ']').attr("disabled", false);
          } else {
            $el.find('[data-volunteer-id=' + context[i].volunteer_id + ']').attr("disabled", true);
            $el.find('[data-volunteer-id=' + context[i].volunteer_id + ']').next().css( "color", "#b0b8c4" );
          }
          ret = ret + '<div id="checkArray">' + $el.html() + '</div>';
        }
      }
      else if (one_slot_chosen === false) {
        for(var i=0, j=context.length; i<j; i++) {
          var $el = $(options.fn(context[i]));
          if (any_slot_chosen) {
            $el.find('[data-volunteer-id=' + context[i].volunteer_id + ']').attr("disabled", true);
            $el.find('[data-volunteer-id=' + context[i].volunteer_id + ']').next().css( "color", "#b0b8c4" );
          } else {
            $el.find('[data-volunteer-id=' + context[i].volunteer_id + ']').attr("disabled", false);
          }
          ret = ret + '<div id="checkArray">' + $el.html() + '</div>';
        }
      }
      return ret;
    }); // registerHelper

    // this.first_vol_id = _.first(this.collection.toJSON()).id; // used in 'render'

    this.setElement($("#volunteers-avail-view-to-be-attached"));
  }, // initialize

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

    'click .checkers': function(e) {
      var view_context = this;
      var slot_id = parseInt($(e.target)[0].dataset.id);
      var volunteer_id = parseInt($(e.target)[0].dataset.volunteerId);
      var student_id = this.model.get('id');
      var student = this.model;

      if ($(e.target)[0].checked) {
        // $(".checkers[data-volunteer-id=" + volunteer_id + "]").attr("disabled", true);
        // $(".checkers[data-volunteer-id=" + volunteer_id + "]").next().css( "color", "#b0b8c4" );
        $(".checkers").attr("disabled", true);
        $(".checkers").next().css( "color", "#b0b8c4" );
        $(".checkers[data-id=" + slot_id + "]").attr("disabled", false);
        $(".checkers[data-id=" + slot_id + "]").next().css( "color", "black" );

        non_selected_volunteers = this.collection.toJSON().filter(function(vol) {
          return vol.id !== volunteer_id;
        });
        non_selected_volunteers.forEach(function(vol) {
          $(".checkers[data-volunteer-id=" + vol.id + "]").attr("disabled", true);
          $(".checkers[data-volunteer-id=" + vol.id + "]").next().css( "color", "#b0b8c4" );
        })

        saveSlot(student_id, false)
        .then(function(result) {
          var span = $(e.target).next();
          $($(e.target).next()).fadeOut(0, function() {
            span.replaceWith($(view_context.template_for_slot_span({
              day_thai: result.day_thai,
              time_thai: result.time_thai,
              first_name: student.get("first_name")
            }) ).fadeIn(0) );
          });
        })
        .catch(function(error) {
          console.log(error);
        });
      } else if (!$(e.target)[0].checked) {
        // this.collection.toJSON().forEach(function(vol) { // maybe use later....
        //   $(".checkers[data-volunteer-id=" + vol.id + "]").attr("disabled", false);
        //   $(".checkers[data-volunteer-id=" + vol.id + "]").next().css( "color", "black" );
        // })
        $(".checkers").attr("disabled", false);
        $(".checkers").next().css( "color", "black" );

        saveSlot(null, true)
        .then(function(result) {
          var span = $(e.target).next();
          $($(e.target).next()).fadeOut(0, function() {
            span.replaceWith($(view_context.template_for_unchecked_slot_span({
              day_thai: result.day_thai,
              time_thai: result.time_thai,
            }) ).fadeIn(0) );
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
    }, // 'click .checkers': function(e)

    'click #connect-with-volunteer': function (e) {
      var volunteer_id = $(e.target)[0].dataset.id;
      var volunteer_first_name = $(e.target)[0].dataset.firstname;
      var volunteer_last_name = $(e.target)[0].dataset.lastname;
      var volunteer = new VolunteerForStudent({id: volunteer_id});
      var student = this.model;
      var gender_particle = student.gender === "male" || "Male" || "ผู้ชาย" ? "ครับ" : "ค่ะ";
      volunteer.fetch({
        success: function (model, response, options) {
          console.log("success");
          console.log(student.toJSON());
          swal({
            title: "ขอบคุณ" + gender_particle + "!", //"สวัสดีครับ -- Thank you for connecting with the CEP Skype teacher!",
            text: volunteer_first_name + " " + volunteer_last_name + " จะได้รับอีเมลจากโครงการซิตี้ อิงลิช ที่มีชื่อและอีเมลของคุณอยู่ในนั้น และเราจะติดต่อคุณกลับเร็วๆ นี้",
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

  no_vol_with_slots: function() { // if a vol has no slots avail, then vol not in this view/collection
    var vols_in_view = this.collection.length
    if (vols_in_view === 0) { 
      return true
    }
    else {
      return false
    }
  },

  render: function() {
    if (this.no_vol_with_slots()) { // render the template here w/o Promises
      this.$el.html(this.template({
        no_vol_with_slots: true
      }));
      return this;
    } else { // render the template here WITH Promises
      var view_context = this;

      function sequence(volunteers, callback) { // see page 32 in book, "JS with Promises"
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
            // if (volunteer.get("id") === view_context.first_vol_id) { // to prevent multiple renderings
              volunteer.set({skype_time_slots: slots});
              volunteer.set({number_of_slots_listed: slots.length});
              view_context.$el.html(view_context.template({
                no_vol_with_slots: false,
                volunteers: view_context.collection.toJSON(),
                student_id: view_context.model.get("id"),
                first_name: view_context.model.get("first_name")
              }));
              return view_context;
            // } 
          })
      })
      .catch(function (reason) {
        console.log(reason);
      });

      function getVolunteerSlots(volunteer) {
        var volunteer_available = new VolunteerAvailable({id: volunteer.get("id")});
        return volunteer_available.fetch(); // in Rails constroller 'show' method, returning slots of that particular volunteer that are available to the student/current_user (not the volunteer himself)
      }

    } // else

  } // render
});
