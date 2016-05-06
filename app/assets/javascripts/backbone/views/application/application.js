var ApplicationView = Backbone.View.extend({

  template:  HandlebarsTemplates['application/application'],

  events: {},

  initialize: function() {

  },

  app_language_is_thai: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  application_title: function() {
    return this.choose_language("Application Form & CEP Schedule", "กดกดกดกดกดกดกดกดกดกดกดกดกดกดกดกดกดกดดด");
  },
  choose_language: function(english, thai) {
    if (this.app_language_is_thai()) {
      return thai
    } else {
      return english;
    }
  },

  render: function() {
    this.$el.html(this.template({
      application_title: this.application_title(),

    }));

    return this;
  }

});

