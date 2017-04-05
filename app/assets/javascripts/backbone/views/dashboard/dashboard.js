var DashboardView = Backbone.View.extend({
  attributes: {
    id: "dashboard"
  },

  initialize: function(options) {
    this.options = options
    // this.listenTo(this.model, 'sync', this.render);
    this.$el.appendTo(".entire");
  },

  role_is_leader: function() {
    return this.model.get("role") === "leader"
  },

  template:  HandlebarsTemplates['dashboard/dashboard'],

  render: function() {
    var leader = this.model;
    this.$el.html(this.template({
      first_name: leader.get("first_name"),
      role_is_leader: this.role_is_leader(),
      role: leader.get("role")
    }));
  }
});


