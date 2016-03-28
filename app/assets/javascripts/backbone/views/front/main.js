var MainFrontView = Backbone.View.extend({
  template:  HandlebarsTemplates['front/main'],
  render: function() {
    this.$el.html(this.template({
      thai_flag_present: this.thai_flag_up(),
      login: this.login_button_language(),
      register: this.register_button_language(),
      volunteer: this.volunteer_button_language(),
      features: this.features_language(),
      step_one: this.step_one(),
      step_two: this.step_two(),
      helping_friends: this.helping_friends()
    }));
  },
  thai_flag_up: function() {
    return $(".thai_flag").is(":visible");
  },
  login_button_language: function() {
    return this.switch_languages("Login", "เข้าสู่ระบบ");
  },
  register_button_language: function() {
    return this.switch_languages("Register", "ลงทะเบียน");
  },
  volunteer_button_language: function() {
    return this.switch_languages("Volunteer!", "รับอาสา!");
  },
  features_language: function() {
    return this.switch_languages("Features", "คุณลักษณะเด่น");
  },
  step_one: function() {
    return this.switch_languages("Step One", "ขั้นตอนหนึ่ง");
  },
  step_two: function() {
    return this.switch_languages("Step Two", "ขั้นตอนที่สอง");
  },
  helping_friends: function() {
    return this.switch_languages("Friends Helping Friends", "ช่วยให้เพื่อน ๆ ซึ่งกันและกัน");
  },
  switch_languages: function(english, thai) {
    if (this.thai_flag_up()) {
      return english;
    } else {
      return thai
    }
  },
  initialize: function() {
    this.$el.appendTo(".entire-main");
  }
});

