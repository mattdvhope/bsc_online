var VolunteerPageView = Backbone.View.extend({
  template:  HandlebarsTemplates['volunteer/volunteer_info'],
  render: function() {
    this.$el.html(this.template({
      window_big: this.window_width(),
      thai_language: this.app_language_is_thai(),
      steps_title: this.steps_title(),
      register_organization: this.register_organization(),
      volunteer_registration: this.volunteer_registration()

    }));
  },
  window_width: function() {
    return $(window).width() > 550
  },
  app_language_is_thai: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  steps_title: function() {
    return this.choose_language("Steps to becoming a CEP volunteer", "ขั้นตอนในการเป็นอาสาสมัคร");
  },
  register_organization: function() {
    return this.choose_language("Register Your Organization", "ลงทะเบียนองค์กรของคุณ");
  },
  volunteer_registration: function() {
    return this.choose_language("Volunteer Registration", "การลงทะเบียนคนอาสาสมัคร");
  },
  choose_language: function(english, thai) {
    if (this.app_language_is_thai()) {
      return thai
    } else {
      return english;
    }
  },
  initialize: function() {
    this.listenTo(this.model, 'sync', this.render());
    this.$el.appendTo(".entire-main");
  }
});


