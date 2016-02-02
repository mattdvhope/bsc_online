var VolunteerPageView = Backbone.View.extend({
  template:  HandlebarsTemplates['volunteer/volunteer_info'],
  fadeOut: function() {
    this.$el.fadeOut(0, function() {
      this.remove();
    }.bind(this));
    App.getFrontMainPage();
  },
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.$el.appendTo(".entire-main");
  }
});


