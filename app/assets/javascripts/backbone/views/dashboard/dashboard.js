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

  role_is_leader: function() {
    return this.model.get("role") === "leader"
  },

  render: function() {
    this.$el.html(this.template({
      first_name: this.model.get("first_name"),
      role_is_leader: this.role_is_leader(),
      role: this.model.get("role")
    }));
  }
});


