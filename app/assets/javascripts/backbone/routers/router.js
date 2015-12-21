var Router = Backbone.Router.extend({
  routes: {
    "register_admin": "registerAdmin",
    "register_vol": "registerVol",
    "register_student": "registerStudent",
    "log_in_student": "studentSession"
  },
  registerAdmin: function() {
    App.getAdminRegForm();
  },
  registerVol: function() {
    App.getVolRegForm();
  },
  registerStudent: function() {
    var person_registering = "Student";
    App.getStudentRegForm(person_registering);
  },
  studentSession: function() {
    var person_logging_in = "Student";
    App.getLogInForm(person_logging_in);
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
      


