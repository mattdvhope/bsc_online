var VolunteerPageView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.model, 'sync', this.render());
    this.$el.appendTo(".entire");
  },
  template:  HandlebarsTemplates['volunteer/volunteer_info'],
  window_width: function() {
    return $(window).width() > 550
  },
  steps_title: function() {
    return choose_language("Steps to becoming a City English Project (CEP) volunteer", "ขั้นตอนการสมัครเป็นอาสาสมัครโครงการซิตี้ อิงลิช (CEP)");
  },
  register_organization: function() {
    return choose_language("Register Your Organization", "ลงทะเบียนองค์กรของคุณ");
  },
  volunteer_registration: function() {
    return choose_language("Register New Volunteer", "ลงทะเบียนอาสาสมัครใหม่");
  },
  fadeOut: function() {
    App.getFrontMainPage()
  },
  render: function() {
    this.$el.html(this.template({
      window_big: this.window_width(),
      thai_language: thai_language(),
      steps_title: this.steps_title(),
      register_organization: this.register_organization(),
      volunteer_registration: this.volunteer_registration()

    }));
  }
});


