var NewClassTimeView = Backbone.View.extend({
  initialize: function() {
    // this.listenTo(this.model, 'all', this.render());
    this.$el.appendTo(".entire");
  },

  template:  HandlebarsTemplates['dashboard/new_class_time_page'],
  // window_width: function() {
  //   return $(window).width() > 550
  // },
  // steps_title: function() {
  //   return choose_language("Steps to becoming a City English Project (CEP) volunteer", "ขั้นตอนการสมัครเป็นอาสาสมัครโครงการซิตี้ อิงลิช (CEP)");
  // },
  // register_organization: function() {
  //   return choose_language("Register Your Organization", "ลงทะเบียนองค์กรของคุณ");
  // },
  // volunteer_registration: function() {
  //   return choose_language("Register New Volunteer", "ลงทะเบียนอาสาสมัครใหม่");
  // },
  // fadeOut: function() {
  //   App.getFrontMainPage()
  // },
  render: function() {
    var csrf_token = $('meta[name=csrf-token]').attr('content');
    this.$el.html(this.template({
      token: csrf_token,
      // thai_language: thai_language(),
      // steps_title: this.steps_title(),
      // register_organization: this.register_organization(),
      // volunteer_registration: this.volunteer_registration()

    }));

    return this;
  }
});


