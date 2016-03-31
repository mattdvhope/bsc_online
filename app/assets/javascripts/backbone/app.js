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

    this.front_page_main = front_page_main;
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
  renderNavBar: function() {
    var nav_bar = new NavBarView();
    nav_bar.render();

    this.nav_bar = nav_bar;
  },
  removeNavAndPage: function() {
    $(".entire-nav").children().remove();
    $(".entire-main").children().remove();
  },
  getFrontFooterPage: function() {
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
  loadProfileForm: function() {
    // this.student = gon.student
    // this.volunteers = gon.english_teachers    // new Volunteers();
    // this.profile_view = new ProfileFormView({ collection: this.volunteers });
    // this.volunteers.fetch();
  },
  getProfileForm: function(email) {
    this.student = gon.student
    this.volunteers = gon.english_teachers    // new Volunteers();
    this.profile_view = new ProfileFormView({ collection: this.volunteers });
console.log(gon.student);
console.log(gon.english_teachers);
    var volunteer = this.volunteers[0]   //.findWhere({ email: email }).toJSON()
    this.profile_view.render(volunteer);
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
        sessionStorage.setItem('fragment', "volunteer_info");
      } else {
        this.getFrontMainPage();
      }
    } else {
      this.getFrontMainPage();
    }
    this.getFrontFooterPage();
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

$(document).on("click", "#backbone-app input", function(e) {
  e.preventDefault();     // "trigger: true" (below) will call the 'route' function in the 'initialize' method
  App.log_in_form_modal.close(e);
  // App.getVolunteerPage();
  // router.navigate($(e.currentTarget).attr("href").replace(/^\//, ""), { trigger: true } );
});


App.init();










