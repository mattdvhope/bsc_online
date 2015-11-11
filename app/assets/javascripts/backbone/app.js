//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers


var App = {
  getFrontPage: function() {
    var front_page_main = new MainFrontView();
    front_page_main.render();

    // this.front_main = front_page_main;
  },
  getLogInForm: function(person) {
    var log_in_form_modal = new LogInFormView();
    log_in_form_modal.render(person);

    this.log_in_form = log_in_form_modal;
  },
  getRegForm: function(person) {
    var reg_form_modal = new RegFormView();
    reg_form_modal.render(person);

    this.reg_form = reg_form_modal;
  },
  init: function() {
    this.getFrontPage();
  }
};

var router = new LogRegRouter();

Backbone.history.start({
  pushState: true, // use 'pushState' to get rid of the '#' in the URL
  silent: true // If the server has already rendered the entire page, and you don't want the initial route to trigger when starting History, pass silent: true.
});


$(document).on("click", "#backbone-app a", function(e) {
  e.preventDefault();     // "trigger: true" (below) will call the 'route' function in the 'initialize' method
  router.navigate($(e.currentTarget).attr("href").replace(/^\//, ""), { trigger: true } );
});                // currentTarget is a jQuery method


App.init();








