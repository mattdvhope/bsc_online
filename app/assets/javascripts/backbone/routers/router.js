var Router = Backbone.Router.extend({
  routes: {
    "register_admin": "registerAdmin",
    "register_vol": "registerVol",
    "register_student": "registerStudent",
    "log_in": "startSession",
    "volunteer_info": "showVolunteerPage",
    "volunteers/:email": "showProfile"
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
  startSession: function() {
    App.getLogInForm();
  },
  showVolunteerPage: function() {
    if (App.reg_form) {
      App.reg_form.fadeOut();
    }
    else if (App.log_in_form) {
      App.log_in_form.fadeOut();
    } else {
      App.getVolunteerPage();      
    }
  },
  showProfile: function(email) {
    App.getProfileForm(email);
  },
  index: function() {
    var modal = App.reg_form || App.log_in_form;
    var page = App.volunteer_page;
    if (modal && page) {
      App.getFrontMainPage();
    } else if (modal) {
      if (modal.$el.is(":visible")) {
        modal.fadeOut();
      }
    } else if (page) {
      if (page.$el.is(":visible")) {
        page.fadeOut();
      }
    }
    App.reg_form = undefined;
    App.log_in_form = undefined;
    App.volunteer_page = undefined;
  },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index); // listening for a path that starts with a '/' which will be our 'index' & we'll call the current 'index' method in 'Router'
    // this.route(/^\/?volunteer_info/, "volunteer_info", this.showVolunteerPage);
  }
});
      


