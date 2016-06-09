var StudentDashboardView = Backbone.View.extend({
  attributes: {
    id: "student-dashboard"
  },

  template:  HandlebarsTemplates['dashboard/student_dashboard'],

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


