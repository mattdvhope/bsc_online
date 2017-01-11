var WelcomePopupView = Backbone.View.extend({
  initialize: function() {},
  events: {},

  thank_you: function() {
    return choose_language("Thank you!", "ขอขอบคุณครับ!");
  },

  university_summer_applicant: function() {
    return sessionStorage.getItem('student_type') === "university_summer_applicant";
  },

  template:  HandlebarsTemplates['application_form/welcome_popup'],

  render: function() {
    this.$el.html(this.template({
      thai_language: thai_language(),
      thank_you: this.thank_you(),
      class_time: this.model.toJSON().class_time_scheduled
    }));

    return this;
  }

});

