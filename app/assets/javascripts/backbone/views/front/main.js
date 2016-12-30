var MainFrontView = Backbone.View.extend({
  template:  HandlebarsTemplates['front/main'],
  initialize: function() {
    this.$el.appendTo(".entire");
  },

  events: {
    // 'click #click-welcome': function (e) {
    //   var el = document.getElementById("welcome-caption-id");
    //   el.scrollIntoView();
    // },
    'click #get-to-get-started': function (e) {
      var el = document.getElementById("get-started");
      el.scrollIntoView();
    },
  },

  window_width: function() {
    return $(window).width() > 550
  },
  thai_language: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  login_button_language: function() {
    return this.choose_language("Login", "เข้าสู่ระบบ");
  },
  register_button_language: function() {
    return this.choose_language("Register", "ลงทะเบียน");
  },
  volunteer_button_language: function() {
    return this.choose_language("Volunteer!", "รับอาสา!");
  },
  features_language: function() {
    return this.choose_language("Features", "บริการของเรา");
  },
  step_one: function() {
    return this.choose_language("Step One", "ขั้นตอนหนึ่ง");
  },
  step_two: function() {
    return this.choose_language("Step Two", "ขั้นตอนที่สอง");
  },
  helping_friends: function() {
    return this.choose_language("Friends Helping Friends", "ช่วยให้เพื่อน ๆ ซึ่งกันและกัน");
  },
  christian_worldview: function() { // in _nested_modal_christian_worldview.hrb
    return this.choose_language("Christian Worldview", "โลกทัศน์ของคริสเตียน");
  },
  cost_amount: function() {
    return this.choose_language("Cost amount", "จำนวนเงินค่าใช้จ่าย");
  },
  press_enter: function() { // in _nested_modal_christian_worldview.hrb
    return this.choose_language("Press 'Enter' or click 'Close' when complete", " กดที่ 'Return / Enter' หรือคลิกที่ 'Close' ที่จะออกจากที่นี่");
  },
  choose_language: function(english, thai) {
    if (this.thai_language()) {
      return thai
    } else {
      return english;
    }
  },
  render: function() {
    this.$el.html(this.template({
      window_big: this.window_width(),
      thai_language: this.thai_language(),
      login: this.login_button_language(),
      register: this.register_button_language(),
      volunteer: this.volunteer_button_language(),
      features: this.features_language(),
      step_one: this.step_one(),
      step_two: this.step_two(),
      helping_friends: this.helping_friends(),
      christian_worldview: this.christian_worldview(),
      cost_amount: this.cost_amount(),
      press_enter: this.press_enter()
    }));
  }
});

