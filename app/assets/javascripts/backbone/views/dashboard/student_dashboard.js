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
    return this.choose_language("Welcome to the \"City English Project,\" " + this.model.get("first_name"), "ยินดีต้อนรับสู่ \"โครงการซิตี้ อิงลิช\" " + this.model.get("first_name"));
  },

  want_skype: function() {
    return this.choose_language("I want a Skype partner!", "ฉันต้องการเพื่อนใน Skype ทำให้เป็น");
  },

  app_language_is_thai: function() {
    return sessionStorage.getItem('language') === "thai";
  },

  choose_language: function(english, thai) {
    if (this.app_language_is_thai()) {
      return thai
    } else {
      return english;
    }
  },

  render: function() {
    this.$el.html(this.template({
      welcome_note: this.welcome_note(),
      want_skype: this.want_skype(),
      thai_language: this.app_language_is_thai()
    }));
  }

});


