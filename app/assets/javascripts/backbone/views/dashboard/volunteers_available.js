var VolunteersAvailableView = Backbone.View.extend({
  initialize: function() {
    this.$el.appendTo(".entire");
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
      this.student_id = this.model.get('id')
      this.volunteer_id = $(e.target)[0].dataset.id;

      $("button#connect-with-volunteer").attr('data-id', this.volunteer_id);
      $("button#connect-with-volunteer").attr('data-firstname', volunteerFirstName);
      $("button#connect-with-volunteer").attr('data-lastname', volunteerLastName);
    },

    'click .checkers': function (e) {
      if ($(e.target)[0].checked) {
        var slot_id = parseInt($(e.target)[0].dataset.id);
        var slot_volunteer_id = parseInt($(e.target)[0].dataset.volunteerId);
        var slot = new SkypeTimeSlot({id: slot_id, available: false});

        var promise = new Promise(function(resolve, reject) {
          resolve(slot.save());
        });

        promise
        .then(function(result) {
          console.log(result);


        })
        .catch(function(error) {
          console.log(error);
        });

        // slot.save({
        //   success: function(model, response, options) {
        //     console.log(model.toJSON());

        //   },
        //   error: function(model, response, options) {
        //     console.log(response);
        //   }
        // });



      }
    }
  },

  template:  HandlebarsTemplates['dashboard/volunteers_available'],

  no_volunteers: function() {
    var stu_num = this.collection.length
    if (stu_num === 0) { 
      return true
    }
    else {
      return false
    }
  },

  render: function() {
    this.$el.html(this.template({
      no_volunteers: this.no_volunteers(),
      volunteers: this.collection.toJSON()

    }));

    return this;
  }
});


