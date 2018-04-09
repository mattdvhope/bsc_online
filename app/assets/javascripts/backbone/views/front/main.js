var MainFrontView = Backbone.View.extend({
  template:  HandlebarsTemplates['front/main'],
  initialize: function() {
    this.$el.appendTo(".entire");
  },

  events: {
    'click #get-to-be-a-member': function (e) {
      var el = document.getElementById("be-a-member");
      el.scrollIntoView(false);
    },
    'click #click-schedule': function (e) {
      e.preventDefault();
      App.getGeneralSchedModal();
    },
    'click #general-schedule': function (e) {
      // e.preventDefault();
      // App.generalScheduleModal();
    },
    'click #free-events': function (e) {
      e.preventDefault();
      App.freeEventsModal();
    },
    'click #be-a-member-point': function (e) {
      var el = document.getElementById("be-a-member");
      el.scrollIntoView();
    },
  },

  window_width: function() {
    return $(window).width() > 550
  },
  schedule: function() {
    return choose_language("Schedule", "ตารางเรียน");
  },
  login_button_language: function() {
    return choose_language("Login", "เข้าสู่ระบบ");
  },
  register_button_language: function() {
    return choose_language("Register", "ลงทะเบียน");
  },
  volunteer_button_language: function() {
    return choose_language("Volunteer!", "รับอาสา!");
  },
  features_language: function() {
    return choose_language("Features", "บริการของเรา");
  },
  helping_friends: function() {
    return choose_language("Friends Helping Friends", "ช่วยให้เพื่อน ๆ ซึ่งกันและกัน");
  },
  christian_worldview: function() { // in _nested_modal_christian_worldview.hrb
    return choose_language("Christian Worldview", "โลกทัศน์ของคริสเตียน");
  },
  cost_amount: function() {
    return choose_language("Cost amount", "จำนวนเงินค่าใช้จ่าย");
  },
  press_enter: function() { // in _nested_modal_christian_worldview.hrb
    return choose_language("Press 'Enter' or click 'Close' when complete", " กดที่ 'Return / Enter' หรือคลิกที่ 'Close' ที่จะออกจากที่นี่");
  },
  render: function() {
    this.$el.html(this.template({
      window_big: this.window_width(),
      thai_language: thai_language(),
      schedule: this.schedule(),
      login: this.login_button_language(),
      register: this.register_button_language(),
      volunteer: this.volunteer_button_language(),
      features: this.features_language(),
      helping_friends: this.helping_friends(),
      christian_worldview: this.christian_worldview(),
      cost_amount: this.cost_amount(),
      press_enter: this.press_enter()
    }));
  }
});

