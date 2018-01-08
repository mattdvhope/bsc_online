//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./called
//= require_tree ./views
//= require_tree ./routers
//= require_tree ./app_methods

console.log("Hello!!!!");

var App = {
  getFrontMainPage: function() {
    getFrontMainPage(); // in 'app_methods' folder
  },
  freeEventsModal: function() {
    var free_events_view = new FreeEventsView();
    $("#freeeventsmodal").html(free_events_view.render().el);
    $("#freeeventsmodal").css("font-family", "'Neue Frutiger W31 Modern Light', 'Athiti'");
    $("#freeeventsmodal").modal();
  },
  generalScheduleModal: function() {
    var class_times = new ClassTimes(); // collection
    class_times.fetch({
      success: function (collection, response, options) {
        var gen_sch_view = new GeneralScheduleView({ collection: collection });
        $("#generalschedulemodal").html(gen_sch_view.render().el);
        $("#generalschedulemodal").css("font-family", "'Neue Frutiger W31 Modern Light', 'Athiti'");
        $("#generalschedulemodal").modal();
        $("button.free-class-button").addClass( "collapsable-free-ev" );
      },
      error: function (collection, response, options) {
        console.log("error");
      }
    });
  },
  allowForNestedModals: function() { // Nested modals ... see http://stackoverflow.com/questions/19305821/multiple-modals-overlay
    $(document).on('show.bs.modal', '.modal', function (event) {
      var zIndex = 1040 + (10 * $('.modal:visible').length);
      $(this).css('z-index', zIndex);
      setTimeout(function() {
        $('.modal-backdrop').not('.modal-stack').css('z-index', zIndex - 1).addClass('modal-stack');
      }, 0);
    });
    $(document).on('hidden.bs.modal', '.modal', function () { // This restores the scrolling ability of the underlying modal.
      $('.modal:visible').length && $(document.body).addClass('modal-open');
    });
  },
  getBusinessPage: function() {
    this.removeNavAndPage();
    this.scrollUpToTopOfPage();
    var business_page = new BusinessPageView();
    document.title = 'Business';
    this.renderNavBar();
    business_page.render();

    this.business_page = business_page;
  },
  getVolunteerPage: function() {
    this.removeNavAndPage();
    this.scrollUpToTopOfPage();
    var volunteer_page = new VolunteerPageView();
    document.title = 'Volunteer Information';
    this.renderNavBar();
    volunteer_page.render();

    this.volunteer_page = volunteer_page;
  },
  getDashboardPage: function(user) {
    document.title = 'Dashboard';
    this.removeNavAndPage();
    this.scrollUpToTopOfPage();
    this.user = user;

    var dashboard_page = new DashboardView({ model: user });
    dashboard_page.render();
    this.renderNavBar();

    var class_times = new ClassTimes();
    this.class_times = class_times;
    var off_site_locations = new OffSiteLocations();
    var students = new Students();
    var slots_taken = new VolunteersForStudents();

    var p1 = new Promise(function (resolve, reject) {
      resolve(class_times.fetch());
    });
    var p2 = new Promise(function (resolve, reject) {
      resolve(off_site_locations.fetch());
    });
    var p3 = new Promise(function (resolve, reject) {
      resolve(students.fetch());
    });
    var p4 = new Promise(function (resolve, reject) {
      resolve(slots_taken.fetch());
    });

    var _this = this;

    Promise.all([p1, p2, p3, p4]).then(function (values) {
      var class_times_view = new ClassTimesView({ collection: values[0] });
      class_times_view.render();
      var off_site_locations_view = new OffSiteLocationsView({ model: user, collection: values[1] });
      _this.off_site_locations = values[1];
      off_site_locations_view.render();
      var former_students_view = new FormerStudentsView({ collection: values[2] });
      former_students_view.render();
      var volunteers_for_students_view = new VolunteersForStudentsView({ collection: values[3] });
      volunteers_for_students_view.render();
    }).catch(function (reason) {
      console.log(reason);
    });
  },
  getNewOffSiteLocationView: function(refreshed) {
    this.removeNavAndPage();
    var refreshed_locations = $("#holder-off-site-locations").data('off-site-locations');
    var off_site_locations = refreshed_locations || this.off_site_locations;
    var new_off_site_location_page = new NewOffSiteLocationView({collection: off_site_locations, model: this.user, refreshed: refreshed});
    document.title = 'New Off-site Location';
    this.renderNavBar();
    this.scrollUpToTopOfPage();
    new_off_site_location_page.render().el;
    this.new_off_site_location_page = new_off_site_location_page;
  },
  getNewClassTimeView: function(refreshed) {
    this.removeNavAndPage();
    var class_times = gon.current_class_times || this.class_times.toJSON();
    var new_class_time_page = new NewClassTimeView({collection: class_times, model: this.user, refreshed: refreshed});
    document.title = 'New Class Time';
    this.renderNavBar();
    this.scrollUpToTopOfPage();
    new_class_time_page.render().el;
    this.new_class_time_page = new_class_time_page;
  },
  getVolunteerDashboardPage: function(volunteer) {
    this.user = volunteer;
    var dashboard_page = new VolunteerDashboardView({ model: volunteer });
    this.renderNavBar();
    this.scrollUpToTopOfPage();
    dashboard_page.render();
    document.title = volunteer.get("first_name") + " " + volunteer.get("last_name");
    var skype_docs_view = new SkypeDocumentsVolView({ model: volunteer });
    setTimeout(function(){ skype_docs_view.render(); }, 3000); // to allow volunteer dashboard to render first
  },
  getStudentDashboardPage: function(student) {
    this.user = student;
    this.getVolunteersAvailableView(student);
    var dashboard_page = new StudentDashboardView({ model: student });
    this.renderNavBar();
    this.scrollUpToTopOfPage();
    dashboard_page.render();
    document.title = student.get("first_name") + " " + student.get("last_name");
    var skype_docs_view = new SkypeDocumentsStuView({ model: student });
    setTimeout(function(){ skype_docs_view.render(); }, 3000); // to allow student dashboard to render first
  },
  getVolunteersAvailableView: function(student) {
    var this_app = this;
    this.volunteers = new VolunteersAvailable(); // collection
    this.volunteers.fetch({
      success: function (collection, response, options) {
        this_app.volunteers_avail_view = new VolunteersAvailableView({ collection: collection, model: student });
        this_app.volunteers_avail_view.render();
      },
      error: function (collection, response, options) {
        console.log("error");
        console.log(response);
      }
    });
  },
  scrollUpToTopOfPage: function() {
    var el = document.getElementById("page-here");
    el.scrollIntoView();
  },
  renderNavBar: function() { //!!!causing main page to render TWICE when flag clicked after 'init'
    var nav_bar = new NavBarView();
    nav_bar.render();
    this.nav_bar_control();

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
    $("#converseonlinemodal").html(this.reg_form_modal.render().el);
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
    if (user_object) {
      var skype_time_slots = $("#user-slots").data("user-slots");
      user_object.skype_time_slots = skype_time_slots
      return new Backbone.Model(user_object);
    }
  },
  openApplicationForm: function() {
    var class_times = new ClassTimes();
    this.class_times = class_times;
    var off_site_locations = new OffSiteLocations();
    this.off_site_locations = off_site_locations;
    var student = new User();

    var p1 = new Promise(function (resolve, reject) {
      resolve(class_times.fetch());
    });
    var p2 = new Promise(function (resolve, reject) {
      resolve(off_site_locations.fetch());
    });

    Promise.all([p1, p2]).then(function (values) {
      var class_times = values[0];
      var off_site_locations = values[1];

      var student = new User();
      var class_times = class_times.sort(function (a, b) {
        if (a.order_no > b.order_no) {
          return 1;
        }
        if (a.order_no < b.order_no) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });
      this.applicationView = new ApplicationView({
        model: student,
        options: class_times,
        collection: off_site_locations
      });

      $("#applicationmodal").html(this.applicationView.render().el);
      $("#applicationmodal").css("font-family", "'Neue Frutiger W31 Modern Light', 'Athiti'");
      $("button.btn-intro-bullets").addClass( "collapsable-intro-bullets" );
    }).catch(function (reason) {
      console.log(reason);
    });
  },
  nav_bar_control: function() {
    var the_app = this;

    // Enable scrolling navbar menu in mobile
    $(".navbar-collapse").css({ maxHeight: $(window).height() - $(".navbar-header").height() + "px" });

    // Thai / American flag
    $(".thai_flag").on("click tap", function() {
      if (sessionStorageAvailable("fragment")) {
        sessionStorage.setItem('language', "thai");
      }
      getCorrectPageWhenFlagClicked();
      $("body").css("font-family", "'Neue Frutiger W31 Modern Light', 'Athiti'");
      the_app.openApplicationForm();
      the_app.instantiateStudentRegForm();
    });

    $(".usa_flag").on("click tap", function() {
      if (sessionStorageAvailable("fragment")) {
        sessionStorage.setItem('language', "english");
      }
      getCorrectPageWhenFlagClicked();
      $("body").css("font-family", "'Century Gothic W01', 'Athiti', sans-serif");
      the_app.openApplicationForm();
      the_app.instantiateStudentRegForm();
    });

    function getCorrectPageWhenFlagClicked() {
      if ($("#front-main-hbs").is(":visible")) {
        the_app.getFrontMainPage();
        the_app.getFooter();
      } else if ($("#on-business-page").is(":visible")) {
        the_app.getBusinessPage();
        the_app.getFooter();
      } else if ($(".entire-vol").is(":visible")) {
        the_app.getVolunteerPage();
        the_app.getFooter();
      }
    }

    $(".nav-hover").mouseenter(function(){
      $(this).css("background-color", "#8BC34A");
    });
    $(".nav-hover").mouseleave(function(){
      $(this).css("background-color", "#2D3179");
    });

    $("#nav-dropdown").mouseenter(function(){
      $(this).css("background-color", "#8BC34A");
    });
    $("#nav-dropdown").mouseleave(function(){
      $(this).css("background-color", "#2D3179");
    });

    $(".dropdown-toggle").mouseenter(function(){
      $(this).css("background-color", "#8BC34A");
    });
    $(".dropdown-toggle").mouseleave(function(){
      $(this).css("background-color", "#2D3179");
    });
  },
  init: function() {
    var user = this.presentUserModel();
    this.user = user;

    var app_obj = this;
    var font = new FontFaceObserver('Neue Frutiger W31 Modern Light');

    font.load().then(function(val) {
      // console.trace(val);
      renderPageWhenFontHere(val.family);
    }).catch(function(valError){
      // console.trace("Athiti");
      renderPageWhenFontHere("Athiti");
    }); // font.load()...

    function renderPageWhenFontHere(font_family) {
      $("#page-here, .entire-footer").css("font-family", font_family); //

      if (gon.page_needed === "front") {
        app_obj.getFrontMainPage();
        app_obj.openApplicationForm();
      }
      else if (gon.page_needed === "volunteer_info" || gon.page_needed === "admin") {
        app_obj.getVolunteerPage();
      }
      else if (gon.page_needed === "leader") {
        app_obj.getDashboardPage(app_obj.presentUserModel());
      }
      else if (gon.page_needed === "new_off_site_location") {
        app_obj.getNewOffSiteLocationView("refreshed");
      }
      else if (gon.page_needed === "new_class_time") {
        app_obj.getNewClassTimeView("refreshed");
      }
      else if (gon.page_needed === "business") {
        app_obj.getBusinessPage();
      }
      else if (gon.page_needed === "volunteer") {
        app_obj.getVolunteerDashboardPage(app_obj.presentUserModel());
      }
      else if (gon.page_needed === "student") {
        app_obj.getStudentDashboardPage(app_obj.presentUserModel());
      }
      app_obj.getFooter();
      app_obj.instantiateStudentRegForm();
      app_obj.instantiateVolunteerRegForm();
      app_obj.instantiateAdminRegForm();
      app_obj.instantiateLogInForm();
      app_obj.instantiateLocationPictures();
    }
  } // init
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

window.addEventListener('popstate', function(event) { // navigating with back & forward buttons
  if (Backbone.history.getFragment() === "") {
    App.getFrontMainPage();
  }
  else if (Backbone.history.getFragment() === "business") {
    App.getBusinessPage();
  }
  else if (Backbone.history.getFragment() === "volunteer_info") {
    App.getVolunteerPage();
  }
  else if (Backbone.history.getFragment() === "dashboard") {
    App.getDashboardPage(App.user);
  }
  else if (Backbone.history.getFragment() === "off_site_locations/new") {
    App.getNewOffSiteLocationView();
  }
  else if (Backbone.history.getFragment() === "class_times/new") {
    App.getNewClassTimeView();
  }
}, false);

App.init();

