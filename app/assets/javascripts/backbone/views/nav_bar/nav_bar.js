var NavBarView = Backbone.View.extend({
  template:  HandlebarsTemplates['nav_bar/nav_bar'],

  initialize: function() {
    this.$el.appendTo(".entire-nav");
  },

  events: {
    'click #home-point': function (e) {
      App.getFrontMainPage();
    },
    'click #features-point': function (e) {
      var el = document.getElementById("features");
      el.scrollIntoView();
    },
    'click #get-started-point': function (e) {
      var el = document.getElementById("get-started");
      el.scrollIntoView();
    },
    'click #contact-us-point': function (e) {
      var el = document.getElementById("contact-us");
      el.scrollIntoView();
    },
    'click #volunteer-steps-point': function (e) {
      var el = document.getElementById("volunteer-steps");
      el.scrollIntoView();
    }
  },

  volunteer_info_visible: function() {
    return $(".entire-vol").is(":visible");
  },
  dashboard_visible: function() {
    return $("#dashboard").is(":visible") || $("#student-dashboard").is(":visible") || $("#volunteer-dashboard").is(":visible");
  },
  sign_up: function() {
    return choose_language("Sign Up!", "สมัครเรียน!");
  },
  features: function() {
    return choose_language("Features", "บริการของเรา");
  },
  get_started: function() {
    return choose_language("Get Started", "เริ่มต้นกับเรา");
  },
  holistic: function() {
    return choose_language("Holistic", "แบบองค์รวมรุ่น");
  },
  contact_us: function() {
    return choose_language("Contact Us", "ติดต่อเรา");
  },
  student: function() {
    return choose_language("Student", "ผู้เรียน");
  },
  register_new_student: function() {
    return choose_language("Become Network Member", "ลงทะเบียนเป็นสมาชิกเครือข่าย");
  },
  you_can_speak: function() {
    return choose_language("'You Can Speak!' Registration", "การลงทะเบียน 'You Can Speak!'");
  },
  volunteer: function() {
    return choose_language("Volunteer", "อาสาสมัคร");
  },
  volunteer_info: function() {
    return choose_language("Volunteer Info", "ข้อมูลอาสาสมัคร");
  },
  register_new_volunteer: function() {
    return choose_language("Register New Volunteer", "ลงทะเบียนอาสาสมัครใหม่");
  },
  login: function() {
    return choose_language("Login", "ล็อกอิน");
  },
  steps_to_volunteer: function() {
    return choose_language("Steps to Volunteer", "ขั้นตอนการเป็นอาสาสมัคร");
  },
  render: function(visible) {
    this.$el.html(this.template({
      volunteer_info_visible: this.volunteer_info_visible(),
      dashboard_visible: this.dashboard_visible(),
      thai_language: thai_language(),
      sign_up: this.sign_up(),
      features: this.features(),
      get_started: this.get_started(),
      holistic: this.holistic(),
      contact_us: this.contact_us(),
      student: this.student(),
      register_new_student: this.register_new_student(),
      you_can_speak: this.you_can_speak(),
      volunteer: this.volunteer(),
      volunteer_info: this.volunteer_info(),
      register_new_volunteer: this.register_new_volunteer(),
      login: this.login(),
      steps_to_volunteer: this.steps_to_volunteer()
    }));
  }
});

