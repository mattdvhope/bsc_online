var ClassDetailsView = Backbone.View.extend({
  initialize: function() {},
  events: {},

  thai_language: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  thank_you: function() {
    return this.choose_language("Thank you!", "ขอขอบคุณครับ!");
  },

  content: function() {
    return this.choose_language("We offer on-site \"You Can Speak!\" classes. If you would like to host one at your business or university, contact Khun So at 086-696-7821 or Line ID: cityenglishproject.", "เรานำเสนอชั้นเรียนว่า \"You Can Speak!\" (โทร. 086-696-7821 หรือ LINE: 'cityenglishproject')");
  },

  choose_language: function(english, thai) {
    if (this.thai_language()) {
      return thai
    } else {
      return english;
    }
  },

  template:  HandlebarsTemplates['front/class_details'],

  render: function() {
    this.$el.html(this.template({
      thai_language: this.thai_language(),
      thank_you: this.thank_you(),
      content: this.content()
    }));

    return this;
  }

});

