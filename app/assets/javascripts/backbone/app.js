//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./called
//= require_tree ./views
//= require_tree ./routers
//= require_tree ./app_methods

var App = {
  getFrontMainPage: function() {
    getFrontMainPage(); // in 'app_methods' folder
  },
  getGeneralSchedModal: function() {
    var class_times = new ClassTimes(); // collection
    class_times.fetch({
      success: function (collection, response, options) {
        var gen_sch_view = new GeneralScheduleView({ collection: collection });
        $("#generalschedulemodal").html(gen_sch_view.render().el);
        $("#generalschedulemodal").css("font-family", "'Neue Frutiger W31 Modern Light', 'Athiti'");
        $("#generalschedulemodal").modal();
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
    this.removeNavAndPage();
    this.user = user;
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
    this.scrollUpToTopOfPage();
    dashboard_page.render();
    document.title = 'Dashboard';
  },
  getNewClassTimeView: function() {
    

    this.removeNavAndPage();
    this.scrollUpToTopOfPage();
    var new_class_time_page = new NewClassTimeView();
    document.title = 'New Class Time';
    this.renderNavBar();
    new_class_time_page.render();

    this.new_class_time_page = new_class_time_page;
  },
  getVolunteerDashboardPage: function(volunteer) {
    var dashboard_page = new VolunteerDashboardView({ model: volunteer });
    this.renderNavBar();
    this.scrollUpToTopOfPage();
    dashboard_page.render();
    // if (volunteer.get("number_of_slots") == 0) {
    //   $("#volunteer-welcome").append("<h4 id='current-numbers-slots'>You have currently decided to be available for 0 Skype-partner time slots, but you can change/edit that below.</h4>")
    // }
    // else {
    //   $("#volunteer-welcome").append("<h4 id='current-numbers-slots'>You have currently decided to be available for " + volunteer.get("number_of_slots") + " out of your total number of Skype-partner time slots (below), but you can change/edit that below.</h4>")
    // }
    document.title = volunteer.get("first_name") + " " + volunteer.get("last_name");
    var skype_docs_view = new SkypeDocumentsVolView({ model: volunteer });
    setTimeout(function(){ skype_docs_view.render(); }, 3000); // to allow volunteer dashboard to render first
  },
  getStudentDashboardPage: function(student) {
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
        // var profile_view_modal = new VolunteerProfileView({ model: student });
        // $("#volunteerprofile").html(profile_view_modal.render().el);
      },
      error: function (collection, response, options) {
        console.log("error");
        console.log(response);
        console.log(options);
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
    var class_times_collection = new ClassTimes();
    class_times_collection.fetch({
      success: function (class_times) {
        var student = new User();
        var class_times = class_times.toJSON().sort(function (a, b) {
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
          options: class_times
        });
        $("#applicationmodal").html(this.applicationView.render().el);
        $("#applicationmodal").css("font-family", "'Neue Frutiger W31 Modern Light', 'Athiti'");
      },
      error: function (collection, response, options) {
        console.log("error");
      }
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
        // app_obj.getGeneralSchedModal();
      }
      else if (gon.page_needed === "volunteer_info" || gon.page_needed === "admin") {
        app_obj.getVolunteerPage();
      }
      else if (gon.page_needed === "leader") {
        app_obj.getDashboardPage(app_obj.presentUserModel());
      }
      else if (gon.page_needed === "new_class_time") {
        app_obj.getNewClassTimeView();
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
  else if (Backbone.history.getFragment() === "volunteer_info") {
    App.getVolunteerPage();
  }
  else if (Backbone.history.getFragment() === "dashboard") {
console.log(App.user);
    App.getDashboardPage(App.user);
  }
  else if (Backbone.history.getFragment() === "class_times/new") {
    App.getNewClassTimePage();
  }
}, false);

App.init();
