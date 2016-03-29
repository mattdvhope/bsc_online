//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

var $entire_main = $(document).find(".entire-main");

var App = {
  renderNavBar: function() {
    if (this.nav_bar) { this.nav_bar.remove(); }
    var nav_bar = new NavBarView();
    nav_bar.render();

    this.nav_bar = nav_bar;
  },
  getFrontMainPage: function() {
    if (this.volunteer_page) { this.volunteer_page.remove(); }
    if (sessionStorageAvailable("fragment")) {
      this.retainTemplateOnReload("");      
    }
    var front_page_main = new MainFrontView();
    this.renderNavBar();
    front_page_main.render();

    this.front_page_main = front_page_main;
  },
  getFrontFooterPage: function() {
    var front_page_footer = new FooterFrontView();
    front_page_footer.render();
  },
  getVolunteerPage: function() {
    if (this.front_page_main) {
      this.front_page_main.remove();
    }
    if (sessionStorageAvailable("fragment")) {
      this.retainTemplateOnReload("volunteer_info");      
    }
    var volunteer_page = new VolunteerPageView();
    this.renderNavBar();
    volunteer_page.render();

    this.volunteer_page = volunteer_page;
  },
  getLogInForm: function() {
    var log_in_form_modal = new LogInFormView();
    log_in_form_modal.render();

    this.log_in_form = log_in_form_modal;
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
    this.volunteers = new Volunteers();
    this.profile_view = new ProfileFormView({ collection: this.volunteers });
    this.volunteers.fetch();
  },
  getProfileForm: function(email) {
    this.student = gon.student
    var volunteer = this.volunteers.findWhere({ email: email }).toJSON()
    this.profile_view.render(volunteer);
  },
  allowBodyScrolling: function() {
    $('body').css('overflow', 'auto');
  },
  retainTemplateOnReload: function(fragment) {
    sessionStorage.setItem('fragment', fragment);
    Backbone.history.navigate(fragment);
  },
  retainThaiLanguageOnReload: function() {
    if (sessionStorage.getItem('language') === "thai") {
      $($(".thai_flag").parent().find( ".thai_flag" )).hide();
      $($(".thai_flag").parent().find( ".usa_flag" )).show(); 
    }
  },
  init: function() {
    // this.getNavBar();    
    if (sessionStorageAvailable("fragment")) {
      this.retainThaiLanguageOnReload();
    }
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
    this.loadProfileForm();
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
});                // currentTarget is a jQuery method



App.init();










