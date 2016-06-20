var DashboardView = Backbone.View.extend({
  attributes: {
    id: "dashboard"
  },

  template:  HandlebarsTemplates['dashboard/dashboard'],

  initialize: function(options) {
    this.user_object = options
    // this.listenTo(this.model, 'sync', this.render);
    this.$el.appendTo(".entire");
  },

  render: function() {
console.log(this.user_object);
    this.$el.html(this.template({
      // first_name: this.model.get("first_name"),
      // role: this.model.get("role"),
      first_name: this.user_object.first_name,
      role: this.user_object.role
    }));
  }
});


