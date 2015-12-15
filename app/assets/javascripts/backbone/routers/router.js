var Router = Backbone.Router.extend({
  routes: {
    "log_in_student": "studentSession",
    "register_student": "registerStudent",
    "register_admin": "registerAdmin"
  },
  studentSession: function() {
    var person_logging_in = "Student";
    App.getLogInForm(person_logging_in);
  },
  registerStudent: function() {
    var person_registering = "Student";
    App.getStudentRegForm(person_registering);
  },
  registerAdmin: function() {
    App.getAdminRegForm();
  },
  index: function() {
    var modal = App.reg_form || App.log_in_form;
    if (!modal.$el.is(":animated")) { // ':animated' (a jQuery pseudo-selector) here refers to 'faded in' ('fadeIn' is currently in operation)
      modal.fadeOut();
    }
    App.reg_form = undefined;
  },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index); // listening for a path that starts with a '/' which will be our 'index' & we'll call the current 'index' method in 'FrontRouter'
    this.route(/^\/?volunteer_intro/, "index", this.index);
  }
});
      


