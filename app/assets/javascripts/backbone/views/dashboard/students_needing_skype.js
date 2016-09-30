var StudentsNeedingSkypeView = Backbone.View.extend({
  initialize: function() {
    this.$el.appendTo(".entire");
  },

  events: {
    'click .student-profile-modal': function (e) {
      var studentFirstName = $(e.target)[0].dataset.firstName;
      var studentLastName = $(e.target)[0].dataset.lastName;
      var studentAge = $(e.target)[0].dataset.age;
      var studentGender = $(e.target)[0].dataset.gender;
      $(".modal-body #student-first-name").text( studentFirstName );
      $(".modal-body #student-last-name").text( studentLastName );
      $(".modal-body #student-age").text( studentAge );
      $(".modal-body #student-gender").text( studentGender );
    }
  },

  template:  HandlebarsTemplates['dashboard/students_needing_skype'],

  no_students: function() {
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
      no_students: this.no_students(),
      students: this.collection.toJSON()

    }));

    return this;
  }
});


