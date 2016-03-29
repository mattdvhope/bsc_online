var Router = Backbone.Router.extend({
  routes: {
    "": "showMainPage",
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
  showMainPage: function() {
    if (App.reg_form) {
      App.reg_form.fadeOut();
    }
    else if (App.log_in_form) {
      App.log_in_form.fadeOut();
    } else {
      App.getFrontMainPage();      
    }
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
    var volunteer_page = App.volunteer_page;
    if (modal && volunteer_page) {
      App.getFrontMainPage();
    } else if (modal) {
      if (modal.$el.is(":visible")) {
        modal.fadeOut();
      }
    } else if (volunteer_page) {
      if (volunteer_page.$el.is(":visible")) {
        volunteer_page.fadeOut();
      }
    }
    App.reg_form = undefined;
    App.log_in_form = undefined;
    App.volunteer_page = undefined;
  },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index); // listening for a path that starts with a '/' which will be our 'index' & we'll call the current 'index' method in 'Router'
    // this.route(/^\/?volunteer_info$/, "volunteer_info", this.showVolunteerPage);
  }
});
      


