var Router = Backbone.Router.extend({
  routes: {
    "register_admin": "registerAdmin",
    "application_form": "apply_to_cep",
    "volunteer_info": "showVolunteerPage"
  },
  registerAdmin: function() {
    App.getAdminRegForm();
  },
  apply_to_cep: function() {
    var person_registering = "Student";
    App.getStudentRegForm(person_registering);
  },
  showVolunteerPage: function() {
    $(window).scrollTop(0);
    if (App.reg_form) {
      App.reg_form.fadeOut();
    }
    else if (App.log_in_form) {
      App.log_in_form.fadeOut();
    } else {
      App.getVolunteerPage();      
    }
  },
  // index: function() {
  //   var modal = App.reg_form || App.log_in_form;
  //   var volunteer_page = App.volunteer_page;
  //   if (modal && volunteer_page) {
  //     App.getFrontMainPage();
  //   } else if (modal) {
  //     if (modal.$el.is(":visible")) {
  //       modal.fadeOut();
  //     }
  //   } else if (volunteer_page) {
  //     if (volunteer_page.$el.is(":visible")) {
  //       volunteer_page.fadeOut();
  //     }
  //   }
  //   App.reg_form = undefined;
  //   App.log_in_form = undefined;
  //   App.volunteer_page = undefined;
  // },
  // initialize: function() {
  //   this.route(/^\/?$/, "index", this.index); // listening for a path that starts with a '/' which will be our 'index' & we'll call the current 'index' method in 'Router'
  //   // this.route(/^\/?volunteer_info$/, "volunteer_info", this.showVolunteerPage);
  // }
});
      


