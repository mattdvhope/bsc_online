//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers


var App = {
  getFrontMainPage: function() {
    var front_page_main = new MainFrontView();
    front_page_main.render();
  },
  getFrontFooterPage: function() {
    var front_page_footer = new FooterFrontView();
    front_page_footer.render();
  },
  getLogInForm: function(person) {
    var log_in_form_modal = new LogInFormView();
    log_in_form_modal.render(person);

    this.log_in_form = log_in_form_modal;
  },
  getStudentRegForm: function(person) {
    var reg_form_modal = new StudentRegFormView();
    reg_form_modal.render(person);

    this.reg_form = reg_form_modal;
  },
//   showErrors: function(errors) {
// console.log(errors);
//     _.each(errors, function (error) {
//       var controlGroup = this.$('.' + error.name);
//       controlGroup.addClass('error');
//       controlGroup.find('.help-inline').text(error.message);
//     }, this);
//   },
//   hideErrors: function () {
//     this.$('.control-group').removeClass('error');
//     this.$('.help-inline').text('');
//   },
  getAdminRegForm: function(person) {
    var reg_form_modal = new AdminRegFormView();
    reg_form_modal.render(person);

    this.reg_form = reg_form_modal;
  },
  allowBodyScrolling: function() {
    $('body').css('overflow', 'auto');
  },
  init: function() {
    this.getFrontMainPage();
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
});                // currentTarget is a jQuery method


// function navigateRouter(target) {
//   router.navigate($(target).attr("href").replace(/^\//, ""), { trigger: true } );
// }


App.init();








