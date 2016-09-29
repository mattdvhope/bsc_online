//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

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
  getVolunteerPage: function() {
    this.removeNavAndPage();
    var volunteer_page = new VolunteerPageView();
    document.title = 'City English Project | Volunteers';
    this.renderNavBar();
    volunteer_page.render();

    this.volunteer_page = volunteer_page;
  },
  getDashboardPage: function(user) {
    var class_times = new ClassTimes(); // collection
    class_times.fetch({
      success: function (collection, response, options) {
        var class_time_view = new ClassTimesView({ collection: collection });
        class_time_view.render();
      },
      error: function (collection, response, options) {
        console.log("error");
      }
    });
    var dashboard_page = new DashboardView({ model: user });
    this.renderNavBar();
    dashboard_page.render();
    document.title = 'City English Project | Dashboard';
  },
  getVolunteerDashboardPage: function(volunteer) {
    var dashboard_page = new VolunteerDashboardView({ model: volunteer });
    this.renderNavBar();
    dashboard_page.render();
    document.title = 'City English Project | Volunteer';
  },
  getStudentDashboardPage: function(student) {
    this.volunteers = new VolunteersAvailable(); // collection
    this.volunteers.fetch({
      success: function (collection, response, options) {
        var view = new VolunteersAvailableView({ collection: collection });
        view.render();
        var profile_view_modal = new VolunteerProfileView({ model: student });
        $("#volunteerprofile").html(profile_view_modal.render().el);
      },
      error: function (collection, response, options) {
        console.log("error");
        console.log(response);
        console.log(options);
      }
    });
    var dashboard_page = new StudentDashboardView({ model: student });
    this.renderNavBar();
    dashboard_page.render();
    document.title = 'City English Project | Student';
  },
  renderNavBar: function() {
    var nav_bar = new NavBarView();
    nav_bar.render();

    this.nav_bar = nav_bar;
  },
  removeNavAndPage: function() {
    $(".entire-nav").children().remove();
    $(document).find(".entire").children().remove();
  },
  getFooter: function() {
    $(".entire-footer").children().remove();
    this.front_page_footer = new FooterFrontView();
    this.front_page_footer.render();
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
  instantiateStudentRegForm: function() {
    var student = new User();
    this.reg_form_modal = new StudentRegFormView({ model: student });
    $("#registerstudentmodal").html(this.reg_form_modal.render().el);
  },
  instantiateVolunteerRegForm: function() {
    var volunteer = new User();
    this.reg_form_modal = new VolRegFormView({ model: volunteer });
    $("#registervolunteermodal").html(this.reg_form_modal.render().el);
  },
  instantiateAdminRegForm: function() {
    var admin = new User();
    this.reg_form_modal = new AdminRegFormView({ model: admin });
    $("#adminregformmodal").html(this.reg_form_modal.render().el);
  },
  retainTemplateOnReload: function(fragment) {
    sessionStorage.setItem('fragment', fragment);
    Backbone.history.navigate(fragment);
  },
  presentUserModel: function() {
    var user_object = $("#user-now").data("present-user");
    return new Backbone.Model(user_object);
  },
  init: function() {
    if (gon.page_needed === "front") {
      this.getFrontMainPage();
    }
    else if (gon.page_needed === "volunteer_info") {
      this.getVolunteerPage();
    }
    else if (gon.page_needed === "leader" || gon.page_needed === "admin") {
      this.getDashboardPage(this.presentUserModel());
    }
    else if (gon.page_needed === "volunteer") {
      this.getVolunteerDashboardPage(this.presentUserModel());
    }
    else if (gon.page_needed === "student") {
      this.getStudentDashboardPage(this.presentUserModel());
    }
    this.getFooter();
    this.instantiateStudentRegForm();
    this.instantiateVolunteerRegForm();
    this.instantiateAdminRegForm();
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




