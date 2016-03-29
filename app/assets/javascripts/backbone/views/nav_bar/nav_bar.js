var NavBarView = Backbone.View.extend({
  template:  HandlebarsTemplates['nav_bar/nav_bar'],
  render: function(visible) {
    this.$el.html(this.template({
      volunteer_page_below: this.volunteer_page_visible(),
      thai_language: this.app_language_is_thai(),
      top: this.top(),
      features: this.features(),
      get_started: this.get_started(),
      holistic: this.holistic(),
      helping_friends: this.helping_friends(),
      student: this.student(),
      register_new_student: this.register_new_student(),
      login_student: this.login_student(),
      volunteer: this.volunteer(),
      volunteer_info: this.volunteer_info(),
      register_new_volunteer: this.register_new_volunteer(),
      login_volunteer: this.login_volunteer(),
      steps_to_volunteer: this.steps_to_volunteer()
    }));
  },
  volunteer_page_visible: function() {
    return $(".entire-vol").is(":visible");
  },
  app_language_is_thai: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  top: function() {
    return this.choose_language("Top", "ข้างบน");
  },
  features: function() {
    return this.choose_language("Features", "คุณลักษณะเด่น");
  },
  get_started: function() {
    return this.choose_language("Get Started", "เริ่ม");
  },
  holistic: function() {
    return this.choose_language("Holistic", "แบบองค์รวมรุ่น");
  },
  helping_friends: function() {
    return this.choose_language("Helping Friends", "ช่วยให้เพื่อน ๆ");
  },
  student: function() {
    return this.choose_language("Student", "นักศึกษา");
  },
  register_new_student: function() {
    return this.choose_language("Register New Student", "ลงทะเบียนนักศึกษาใหม่");
  },
  login_student: function() {
    return this.choose_language("Student Login", "นักศึกษาล็อคอิน");
  },
  volunteer: function() {
    return this.choose_language("Volunteer", "อาสาสมัคร");
  },
  volunteer_info: function() {
    return this.choose_language("Volunteer Info", "ข้อมูลอาสาสมัคร");
  },
  register_new_volunteer: function() {
    return this.choose_language("Register New Volunteer", "ลงทะเบียนอาสาสมัครใหม่");
  },
  login_volunteer: function() {
    return this.choose_language("Volunteer Login", "คนอาสาสมัครล็อคอิน");
  },
  steps_to_volunteer: function() {
    return this.choose_language("Steps to Volunteer", "ขั้นตอนในการเป็นอาสาสมัคร");
  },
  choose_language: function(english, thai) {
    if (this.app_language_is_thai()) {
      return thai
    } else {
      return english;
    }
  },
  initialize: function() {
    this.$el.appendTo(".entire-nav");
  }
});

