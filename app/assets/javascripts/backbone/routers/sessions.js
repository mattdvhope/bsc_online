var Router = Backbone.Router.extend({
  routes: {
    "log_in_student": "addNewSession",
    "log_in_teacher": "addNewSession"
  },
  getAlbum: function(name) {
    App.fetchSongs(name);
  },
  addNewSession: function() {
    App.getLogInForm();
  },
  index: function() {
    var modal = App.songs || App.log_in_form
    if (!modal.$el.is(":animated")) { // ':animated' (a jQuery pseudo-selector) here refers to 'faded in' ('fadeIn' is currently in operation)
      modal.fadeOut();
    }
  },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index); // listening for a path that starts with a '/' which will be our 'index' & we'll call the current 'index' method in 'Router'
  }
});
      


