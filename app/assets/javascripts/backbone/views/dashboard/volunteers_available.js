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
      $(".modal-body #volunteer-first-name").text( volunteerFirstName );
      $(".modal-body #volunteer-last-name").text( volunteerLastName );
      $(".modal-body #volunteer-age").text( volunteerAge );
      $(".modal-body #volunteer-gender").text( volunteerGender );
    }
  },

  template:  HandlebarsTemplates['dashboard/volunteers_available'],

  no_volunteers: function() {
    var vol_num = this.collection.length
    if (vol_num === 0) { 
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


