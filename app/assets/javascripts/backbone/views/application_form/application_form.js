var ApplicationView = Backbone.View.extend({
  id: "application-form-modal",

  initialize: function() {},
  events: {},

  app_language_is_thai: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  application_title: function() {
    return this.choose_language("Register for the 'You Can Speak' class", "กดกดกดกดกดกดกดกดกดกดกดกดกดดกดกดกดกดกดกดกดกกหกหกกหกกหกกดกดกดกดกดดด");
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
    var csrf_token = $('meta[name=csrf-token]').attr('content');
    this.$el.html(this.template({
      application_title: this.application_title(),
      token: csrf_token
    }));

    return this;
  }

});

