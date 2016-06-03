var DashboardView = Backbone.View.extend({
  template:  HandlebarsTemplates['dashboard/dashboard'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.$el.appendTo(".entire");
  },

  render: function() {
    this.$el.html(this.template({
      first_name: this.model.get("first_name"),
      role: this.model.get("role"),
    }));
  }
});


