//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

var $entire_main = $(document).find(".entire-main");

var App = {
  getFrontMainPage: function() {
    this.removeNavAndPage();
    if (sessionStorageAvailable("fragment")) {
      this.retainTemplateOnReload("");      
    }
    var front_page_main = new MainFrontView();
    this.renderNavBar();
    front_page_main.render();
    $(window).scrollTop(0);

    this.front_page_main = front_page_main;
  },
  instantiateApplicationView: function() {
    this.applcationView = new ApplicationView();
    $("#applicationmodal").html(this.applcationView.render().el);
  },
  getVolunteerPage: function() {
    this.removeNavAndPage();
    if (sessionStorageAvailable("fragment")) {
      this.retainTemplateOnReload("volunteer_info");      
    }
    var volunteer_page = new VolunteerPageView();
    this.renderNavBar();
    volunteer_page.render();

    this.volunteer_page = volunteer_page;
  },
  getDashboardPage: function() {
    this.removeNavAndPage();
    // if (sessionStorageAvailable("fragment")) {
    //   this.retainTemplateOnReload("dashboard");      
    // }
    // var dashboard = new DashboardView();
    // this.renderNavBar();
    // dashboard.render();

    // this.dashboard = dashboard;
  },
  renderNavBar: function() {
    var nav_bar = new NavBarView();
    nav_bar.render();

    this.nav_bar = nav_bar;
  },
  removeNavAndPage: function() {
    $(".entire-nav").children().remove();
    $(".entire-main").children().remove();
  },
  getFooter: function() {
    $(".entire-footer").children().remove();
    var front_page_footer = new FooterFrontView();
    front_page_footer.render();
  },
  getLogInForm: function() {
    var log_in_form_modal = new LogInFormView();
    log_in_form_modal.render();

    this.log_in_form_modal = log_in_form_modal;
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
  getStudentOnDashboardLoad: function() {
    var student = new User({ id: gon.student_id });
    this.student = student.fetch();
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
  allowBodyScrolling: function() {
    $('body').css('overflow', 'auto');
  },
  retainTemplateOnReload: function(fragment) {
    sessionStorage.setItem('fragment', fragment);
    Backbone.history.navigate(fragment);
  },
  init: function() {
    if (sessionStorageAvailable("fragment")) {
      if (sessionStorage.getItem('fragment') === "volunteer_info") {
        this.getVolunteerPage();
      } else {
        this.getFrontMainPage();
      }
    } else {
      this.getFrontMainPage();
    }
    this.getFooter();
    this.getStudentOnDashboardLoad();
    this.getVolunteersOnDashboardLoad();
    this.instantiateApplicationView();
  }
};

var router = new Router();

Backbone.history.start({
  pushState: true, // use 'pushState' to get rid of the '#' in the URL
  silent: true // If the server has already rendered the entire page, and you don't want the initial route to trigger when starting History, pass silent: true.
});

$(document).on("click", "#backbone-app a", function(e) {
  e.preventDefault();     // "trigger: true" (below) will call the 'route' function in the 'initialize' method
  router.navigate($(e.currentTarget).attr("href").replace(/^\//, ""), { trigger: true } );
});

App.init();










