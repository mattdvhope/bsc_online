var Router = Backbone.Router.extend({
  routes: {
    "main_thai": "showThai",
    "main_english": "showEnglish",
    "register_admin": "registerAdmin",
    "register_vol": "registerVol",
    "register_student": "registerStudent",
    "log_in": "startSession",
    "volunteer_info": "showVolunteerPage",
    "volunteers/:email": "showProfile"
  },
  showThai: function() {
    App.getFrontMainThai();
  },
  showEnglish: function() {
    App.getFrontMainPage();
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
    App.getVolunteerPage();
  },
  showProfile: function(email) {
    App.getProfileForm(email);
  },
  index: function() {
    var modal = App.reg_form || App.log_in_form || App.volunteer_page || App.front_page_thai_main;
    if (modal.$el.is(":visible")) {
      modal.fadeOut();
    }
    App.reg_form = undefined;
    App.log_in_form = undefined;
    App.volunteer_page = undefined;
  },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index); // listening for a path that starts with a '/' which will be our 'index' & we'll call the current 'index' method in 'Router'
    // this.route(/^\/?volunteer_intro/, "index", this.index);
  }
});
      


