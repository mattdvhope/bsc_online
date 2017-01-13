var StudentDashboardView = Backbone.View.extend({

  attributes: {
    id: "student-dashboard"
  },

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
    this.$el.appendTo(".entire");
  },

  template:  HandlebarsTemplates['dashboard/student_dashboard'],

  welcome_note: function() {
    return choose_language("Welcome to the \"City English Project,\" " + this.model.get("first_name"), "ยินดีต้อนรับสู่ \"โครงการซิตี้ อิงลิช\" " + this.model.get("first_name"));
  },

  render: function() {
    this.$el.html(this.template({
      welcome_note: this.welcome_note(),
      thai_language: thai_language(),
    }));
  }

});


