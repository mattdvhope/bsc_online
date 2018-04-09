var NavBarView = Backbone.View.extend({
  initialize: function() {
    this.$el.appendTo(".entire-nav");

    if($(window).width() > 767) {
      setInterval(function(){ $("#courses-middle").remove(); }, 0);
    } else {
      setInterval(function(){ $("#nav-course-drop-down").remove(); }, 0);
      setInterval(function(){ $("ul.dropdown-menu").css({"right": 0}); }, 0);
    }
  },

  template:  HandlebarsTemplates['nav_bar/nav_bar'],

  events: {
    'click #home-point': function (e) {
      App.getFrontMainPage();
    },
    'click #be-a-member-point': function (e) {
      var el = document.getElementById("be-a-member");
      el.scrollIntoView({behavior: "smooth"});
    },
    'click #contact-us-point': function (e) {
      var el = document.getElementById("contact-us");
      el.scrollIntoView();
    },
    'click #volunteer-steps-point': function (e) {
      var el = document.getElementById("volunteer-steps");
      el.scrollIntoView();
    },
    'click #free-events': function (e) {
      e.preventDefault();
      App.freeEventsModal();
    },
    'click #general-schedule': function (e) {
      // e.preventDefault();
      // App.generalScheduleModal();
    }
  },

  volunteer_info_visible: function() {
    return $(".entire-vol").is(":visible");
  },
  current_user_present: function() {
    if (App.user) {
      return true;
    } else {
      return false;
    }
    // return $("#dashboard").is(":visible") || $("#student-dashboard").is(":visible") || $("#volunteer-dashboard").is(":visible");
  },
  sign_up: function() {
    return choose_language("Sign Up!", "สมัครเรียน!");
  },
  features: function() {
    return choose_language("Features", "บริการของเรา");
  },
  schedule: function() {
    return choose_language("Schedule of everything", "ตารางสำหรับชั้นเรียนและกิจกรรมทั้งหมด");
  },
  network_membership: function() {
    return choose_language("Network Membership", "การเป็นสมาชิกเครือข่าย");
  },
  member_info: function() {
    return choose_language("How to become a member", "ข้อมูลการเป็นสมาชิก");
  },
  free_events: function() {
    return choose_language("Free Events!", "กิจกรรมฟรี!");
  },
  contact_us: function() {
    return choose_language("Contact Us", "ติดต่อเรา");
  },
  register_ycs: function() {
    return choose_language("Register", "สมัครเรียน");
  },
  converse_online: function() {
    return choose_language("Converse in English online. (Members Only)", "สมัครสนทนาภาษาอังกฤษออนไลน์ (เฉพาะสมาชิก)");
  },
  class_at_business: function() {
    return choose_language("Class at your workplace", "ชั้นเรียนในที่ทำงานของคุณ");
  },
  you_can_speak: function() {
    return choose_language("'You Can Speak!' Registration", "สมัครเรียนหลักสูตร 'You Can Speak!'");
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
  login_for_members: function() {
    return choose_language("Login for Members", "เข้าสู่ระบบ (เฉพาะสมาชิก)");
  },
  steps_to_volunteer: function() {
    return choose_language("Steps to Volunteer", "ขั้นตอนการเป็นอาสาสมัคร");
  },
  render: function(visible) {
    this.$el.html(this.template({
      volunteer_info_visible: this.volunteer_info_visible(),
      current_user_present: this.current_user_present(),
      thai_language: thai_language(),
      sign_up: this.sign_up(),
      features: this.features(),
      free_events: this.free_events(),
      schedule: this.schedule(),
      network_membership: this.network_membership(),
      member_info: this.member_info(),
      contact_us: this.contact_us(),
      register_ycs: this.register_ycs(),
      converse_online: this.converse_online(),
      class_at_business: this.class_at_business(),
      you_can_speak: this.you_can_speak(),
      volunteer: this.volunteer(),
      volunteer_info: this.volunteer_info(),
      register_new_volunteer: this.register_new_volunteer(),
      login: this.login(),
      login_for_members: this.login_for_members(),
      steps_to_volunteer: this.steps_to_volunteer()
    }));
  }
});

