var VolunteersAvailableView = Backbone.View.extend({
  initialize: function() {
    this.$el.appendTo(".entire");
  },

  events: {
    'click .volunteer-profile-modal': function (e) {
      // console.log($(e.target)[0].dataset.firstName);
      var volunteerName = $(e.target)[0].dataset.firstName;
      console.log(volunteerName);
      $(".modal-body #volunteer-name").text( volunteerName );
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


