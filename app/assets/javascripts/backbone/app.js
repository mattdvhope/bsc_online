//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

var $entire = $(document).find(".entire");

var App = {
  getFrontMainPage: function() {
    this.removeNavAndPage();
    if (sessionStorageAvailable("fragment")) {
      this.retainTemplateOnReload("");      
    }
    var front_page_main = new MainFrontView();
    document.title = 'City English Project | Home';
    this.renderNavBar();
    front_page_main.render();
    $(window).scrollTop(0);

    this.front_page_main = front_page_main;
  },
  instantiateApplicationView: function() {
    var student = new User();
    this.applcationView = new ApplicationView({ model: student });
    $("#applicationmodal").html(this.applcationView.render().el);
  },
  instantiateWelcomePopup: function() {
    this.welcomePopupView = new WelcomePopupView();
    $("#welcomepopupmodal").html(this.welcomePopupView.render().el);
  },
  getVolunteerPage: function() {
    this.removeNavAndPage();
    var volunteer_page = new VolunteerPageView();
    document.title = 'City English Project | Volunteers';
    this.renderNavBar();
    volunteer_page.render();

    this.volunteer_page = volunteer_page;
  },
  getDashboardPage: function(user) {
    this.removeNavAndPage();
    var guest_students = new GuestStudents(); // collection
    guest_students.fetch({
      success: function (collection, response, options) {
        console.log("success");
        var guest_st_page = new GuestStudentsView({ collection: collection });
        console.log(collection.length);

        guest_st_page.render();
      },
      error: function (collection, response, options) {
        console.log("error");
      }
    });
    document.title = 'City English Project | Dashboard';
    var dashboard_page = new DashboardView({ model: user });
    this.renderNavBar();
    dashboard_page.render();
    // this.guest_students = guest_students;
  },
  renderNavBar: function() {
    var nav_bar = new NavBarView();
    nav_bar.render();

    this.nav_bar = nav_bar;
  },
  removeNavAndPage: function() {
    $(".entire-nav").children().remove();
    $entire.children().remove();
  },
  getFooter: function() {
    $(".entire-footer").children().remove();
    var front_page_footer = new FooterFrontView();
    front_page_footer.render();
  },
  instantiateLogInForm: function() {
    var session = new Session();
    this.log_in_form_modal = new LogInFormView({ model: session });
    $("#loginmodal").html(this.log_in_form_modal.render().el);
  },
  instantiateLocationPictures: function() {
    this.location_pictures_modal = new LocationPicturesView();
    $("#locationpicturesmodal").html(this.location_pictures_modal.render().el);
  },
  getStudentRegForm: function(person) {
    var reg_form_modal = new StudentRegFormView();
    reg_form_modal.render(person);

    this.reg_form = reg_form_modal;
  },
  getAdminRegForm: function() {
    var reg_form_modal = new AdminRegFormView();
    reg_form_modal.render();

    this.reg_form = reg_form_modal;
  },
  getVolRegForm: function() {
    var reg_form_modal = new VolRegFormView();
    reg_form_modal.render();

    this.reg_form = reg_form_modal;
  },
  getVolunteersOnDashboardLoad: function() {
    this.volunteers = new Volunteers();
    this.volunteers.fetch();
  },
  getProfileForm: function(id) {
    this.profile_view = new ProfileFormView({ collection: this.volunteers });
    var volunteer = this.volunteers.findWhere({ id: parseInt(id) }).toJSON();
    var student = this.student.responseJSON
    this.profile_view.render(volunteer, student);
  },
  retainTemplateOnReload: function(fragment) {
    sessionStorage.setItem('fragment', fragment);
    Backbone.history.navigate(fragment);
  },
  init: function() {
    if (gon.page_needed === "front") {
      this.getFrontMainPage();
    }
    else if (gon.page_needed === "volunteer_info") {
      this.getVolunteerPage();
    }
    else if (gon.page_needed === "leader" || gon.page_needed === "admin") {
      var user = $("#user-now").data("present-user");
      user_model = new Backbone.Model(user);
      var guest_students = $("#guests-now").data("guest-students");
      this.guest_student_collection = new Backbone.Collection(guest_students);
      this.guest_students = guest_students;
      App.getDashboardPage(user_model);
    }
    this.getFooter();
    this.instantiateApplicationView();
    this.instantiateWelcomePopup();
    this.instantiateLogInForm();
    this.instantiateLocationPictures();
  }
};

var router = new Router();

Backbone.history.start({
  pushState: true, // use 'pushState' to get rid of the '#' in the URL
  silent: true // If the server has already rendered the page, and you don't want the initial route to trigger when starting History, pass silent: true.
});

$(document).on("click", "#backbone-app a", function(e) {
  e.preventDefault();     // "trigger" (below) tells Backbone whether it should call the route handler function or not; this ALWAYS needs to be true
  router.navigate($(e.currentTarget).attr("href").replace(/^\//, ""), { trigger: true } );
});

App.init();




