var FrontRouter = Backbone.Router.extend({
  routes: {
    "": "openFrontPage",
  },
  openFrontPage: function() {
console.log("in router?????");
    App.getFrontPage;
  },
  index: function() {
    var modal = App.songs || App.log_in_form
    if (!modal.$el.is(":animated")) { // ':animated' (a jQuery pseudo-selector) here refers to 'faded in' ('fadeIn' is currently in operation)
      modal.fadeOut();
    }
  },
  initialize: function() {
    // this.route(/^\/?$/, "index", this.index); // listening for a path that starts with a '/' which will be our 'index' & we'll call the current 'index' method in 'Router'
  }
});
      


