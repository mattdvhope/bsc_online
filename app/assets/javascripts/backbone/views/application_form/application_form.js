var ApplicationView = Backbone.View.extend({
  id: "application-form-modal",

  initialize: function() {},
  events: {},

  app_language_is_thai: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  application_title: function() {
    return this.choose_language("Application for Thai people who want to learn English at CEP", "กดกดกดกดกดกดกดกดกดกดกดกดกดดกดกดกดกดกดกดกดกกหกหกกหกกหกกดกดกดกดกดดด");
  },
  choose_language: function(english, thai) {
    if (this.app_language_is_thai()) {
      return thai
    } else {
      return english;
    }
  },

  template:  HandlebarsTemplates['application_form/application_form'],

  render: function() {
    this.$el.html(this.template({
      application_title: this.application_title(),

    }));

    return this;
  }

});

