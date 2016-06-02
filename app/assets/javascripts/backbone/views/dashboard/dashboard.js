var DashboardView = Backbone.View.extend({
  template:  HandlebarsTemplates['dashboard/dashboard'],
  render: function() {
    this.$el.html(this.template());
  },
  initialize: function() {
    // this.listenTo(this.model, 'sync', this.render());
    this.$el.appendTo(".entire");
  }
});


