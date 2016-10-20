var VolunteerDashboardView = Backbone.View.extend({
  attributes: {
    id: "volunteer-dashboard"
  },

  template:  HandlebarsTemplates['dashboard/volunteer_dashboard'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.$el.appendTo(".entire");
    Handlebars.registerPartial('select_day', HandlebarsTemplates['dashboard/select_day']);
  },

  render: function() {
    this.$el.html(this.template({
      first_name: this.model.get("first_name")
    }));
  }
});


