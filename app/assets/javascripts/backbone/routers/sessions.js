var Router = Backbone.Router.extend({
  routes: {
    "log_in_student": "studentSession",
    "log_in_teacher": "teacherSession"
  },
  getAlbum: function(name) {
    App.fetchSongs(name);
  },
  studentSession: function() {
    var person_logging_in = "Student";
    App.getLogInForm(person_logging_in);
  },
  teacherSession: function() {
    var person_logging_in = "Teacher";
    App.getLogInForm(person_logging_in);
  },
  index: function() {
    var modal = App.songs || App.log_in_form
    if (!modal.$el.is(":animated")) { // ':animated' (a jQuery pseudo-selector) here refers to 'faded in' ('fadeIn' is currently in operation)
      modal.fadeOut();
    }
  },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index); // listening for a path that starts with a '/' which will be our 'index' & we'll call the current 'index' method in 'Router'
  }
});
      


