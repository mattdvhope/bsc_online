var DashboardView = Backbone.View.extend({
  template:  HandlebarsTemplates['dashboard/dashboard'],
  // fadeOut: function() {
  //   this.$el.fadeOut(0, function() {
  //     this.remove();
  //   }.bind(this));
  //   App.getFrontMainPage();
  // },
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    this.listenTo(this.model, 'sync', this.render());
    this.$el.appendTo(".entire-main");
  }
});


