//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

var App = {
  getFrontMainPage: function() {
    var front_page_main = new MainFrontView();
    front_page_main.$el.parent().children().remove()
    var front_page_main = new MainFrontView();
    front_page_main.render();
  },
  getFrontMainThai: function() {
    var front_page_thai_main = new MainThaiView();
    front_page_thai_main.$el.parent().children().remove()
    var front_page_thai_main = new MainThaiView();
    front_page_thai_main.render();
  },
  getFrontFooterPage: function() {
    var front_page_footer = new FooterFrontView();
    front_page_footer.render();
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
  init: function() {
    this.getFrontMainPage();
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








