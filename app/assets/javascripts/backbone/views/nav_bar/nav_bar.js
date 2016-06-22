var NavBarView = Backbone.View.extend({
  template:  HandlebarsTemplates['nav_bar/nav_bar'],

  initialize: function() {
    this.$el.appendTo(".entire-nav");
  },

  volunteer_info_visible: function() {
    return $(".entire-vol").is(":visible");
  },
  dashboard_visible: function() {
    return $("#dashboard").is(":visible") || $("#student-dashboard").is(":visible");
  },
  app_language_is_thai: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  top: function() {
    return this.choose_language("Top", "หน้าแรก");
  },
  features: function() {
    return this.choose_language("Features", "บริการของเรา");
  },
  get_started: function() {
    return this.choose_language("Get Started", "เริ่มต้นกับเรา");
  },
  holistic: function() {
    return this.choose_language("Holistic", "แบบองค์รวมรุ่น");
  },
  contact_us: function() {
    return this.choose_language("Contact Us", "ติดต่อเรา");
  },
  student: function() {
    return this.choose_language("Student", "ผู้เรียน");
  },
  register_new_student: function() {
    return this.choose_language("Become Network Member", "ลงทะเบียนเป็นสมาชิกเครือข่าย");
  },
  login_student: function() {
    return this.choose_language("Network Member Login", "เครือข่ายสมาชิกเข้าสู่ระบบ");
  },
  you_can_speak: function() {
    return this.choose_language("'You Can Speak' Registration", "การลงทะเบียน 'You Can Speak'");
  },
  student_promotion: function() {
    return this.choose_language("University Student Summer Promotion", "โปรโมชั่นปิดเทอมสำหรับนักศึกษา");
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
  login_student: function() {
    return this.choose_language("Login", "ล็อกอิน");
  },
  login_volunteer: function() {
    return this.choose_language("Volunteer Login", "อาสาสมัครล็อกอิน");
  },
  steps_to_volunteer: function() {
    return this.choose_language("Steps to Volunteer", "ขั้นตอนการเป็นอาสาสมัคร");
  },
  choose_language: function(english, thai) {
    if (this.app_language_is_thai()) {
      return thai
    } else {
      return english;
    }
  },
  render: function(visible) {
    this.$el.html(this.template({
      volunteer_info_visible: this.volunteer_info_visible(),
      dashboard_visible: this.dashboard_visible(),
      thai_language: this.app_language_is_thai(),
      top: this.top(),
      features: this.features(),
      get_started: this.get_started(),
      holistic: this.holistic(),
      contact_us: this.contact_us(),
      student: this.student(),
      register_new_student: this.register_new_student(),
      login_student: this.login_student(),
      you_can_speak: this.you_can_speak(),
      student_promotion: this.student_promotion(),
      volunteer: this.volunteer(),
      volunteer_info: this.volunteer_info(),
      register_new_volunteer: this.register_new_volunteer(),
      login_student: this.login_student(),
      login_volunteer: this.login_volunteer(),
      steps_to_volunteer: this.steps_to_volunteer()
    }));
  }
});

