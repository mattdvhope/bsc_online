var StudentProfileView = Backbone.View.extend({
  attributes: {
    id: "student-profile"
  },

  template:  HandlebarsTemplates['dashboard/student_profile'],

  render: function() {
    this.$el.html(this.template({
      first_name: this.model.toJSON().first_name,
      last_name: this.model.toJSON().last_name,
    }));

    return this;
  }
});
