var DashboardView = Backbone.View.extend({
  attributes: {
    id: "dashboard"
  },

  template:  HandlebarsTemplates['dashboard/dashboard'],

  initialize: function(options) {
    this.options = options
    // this.listenTo(this.model, 'sync', this.render);
    this.$el.appendTo(".entire");
  },

  render: function() {
    this.$el.html(this.template({
      first_name: this.options.user_object.first_name,
      role: this.options.user_object.role
    }));
  }
});


