//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
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
        $("#generalschedulemodal").css("font-family", "'Prompt', sans-serif");
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
  getVolunteerDashboardPage: function(volunteer) {
    var dashboard_page = new VolunteerDashboardView({ model: volunteer });
    this.renderNavBar();
    this.scrollUpToTopOfPage();
    dashboard_page.render();
    document.title = volunteer.get("first_name") + " " + volunteer.get("last_name");
  },
  getStudentDashboardPage: function(student) {
    var this_app = this;
    this.volunteers = new VolunteersAvailable(); // collection
    this.volunteers.fetch({
      success: function (collection, response, options) {
        this_app.volunteers_avail_view = new VolunteersAvailableView({ collection: collection, model: student });
        this_app.volunteers_avail_view.render();
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
    this.scrollUpToTopOfPage();
    dashboard_page.render();
    document.title = student.get("first_name") + " " + student.get("last_name");
  },
  scrollUpToTopOfPage: function() {
    var el = document.getElementById("page-here");
    el.scrollIntoView();
  },
  renderNavBar: function() {
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
      $("body").css("font-family", "'Prompt', sans-serif");
    });

    $(".usa_flag").on("click tap", function() {
      if (sessionStorageAvailable("fragment")) {
        sessionStorage.setItem('language', "english");
        the_app.getGeneralSchedModal();
      }
      getCorrectPageWhenFlagClicked();
      $("body").css("font-family", "'Century Gothic W02', sans-serif");
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

    // "Coming soon" sweet alert
    $("a.coming-soon-vol").on("click", function(e) {
      e.preventDefault();
      swal({
        title: "Coming Soon!",
        text: "Very soon, you will be able to connect with the CEP volunteer administrator in your organization!  We're very excited that soon Thai people will have the opportunity to learn English with you!",
        timer: 15000,
        showConfirmButton: true,
        animation: "slide-from-bottom"
      });
    });

  },
  init: function() {
    $("#page-here, .entire-footer").css("font-family", "'Prompt', sans-serif");

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
    this.openApplicationForm();
    this.nav_bar_control();
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

window.addEventListener('popstate', function(event) { // navigating with back & forward buttons
  if (Backbone.history.getFragment() === "") {
    App.getFrontMainPage();
  }
  else if (Backbone.history.getFragment() === "volunteer_info") {
    App.getVolunteerPage();
  }
}, false);

App.init();

Handlebars.registerHelper('genderTranslate', function(gender) {
  if(gender === "ผู้ชาย" || gender === "male") {
    return "Gender: Male";
  } else if (gender === "ผู้หญิง" || gender === "female") {
    return "Gender: Female";
  } else {
    return "Gender: Unknown";
  }
});


