var WelcomePopupView = Backbone.View.extend({
  initialize: function() {},
  events: {},

  thai_language: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  thank_you: function() {
    return this.choose_language("Thank you!", "ขอขอบคุณครับ!");
  },

  choose_language: function(english, thai) {
    if (this.thai_language()) {
      return thai
    } else {
      return english;
    }
  },

  university_summer_applicant: function() {
    return sessionStorage.getItem('student_type') === "university_summer_applicant";
  },

  template:  HandlebarsTemplates['application_form/welcome_popup'],

  render: function() {
    this.$el.html(this.template({
      thai_language: this.thai_language(),
      thank_you: this.thank_you(),
      class_time: this.model.toJSON().class_time_scheduled
    }));

    return this;
  }

});

