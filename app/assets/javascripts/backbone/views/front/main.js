var MainFrontView = Backbone.View.extend({
  template:  HandlebarsTemplates['front/main'],
  render: function() {
    this.$el.html(this.template({
      thai_language: this.app_language_is_thai(),
      login: this.login_button_language(),
      register: this.register_button_language(),
      volunteer: this.volunteer_button_language(),
      features: this.features_language(),
      step_one: this.step_one(),
      step_two: this.step_two(),
      helping_friends: this.helping_friends()
    }));
  },
  app_language_is_thai: function() {
    return sessionStorage.getItem('language') === "thai";
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
    if (this.app_language_is_thai()) {
      return thai
    } else {
      return english;
    }
  },
  initialize: function() {
    this.$el.appendTo(".entire-main");
  }
});

