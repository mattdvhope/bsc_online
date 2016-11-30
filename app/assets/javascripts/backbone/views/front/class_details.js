var ClassDetailsView = Backbone.View.extend({
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

  template:  HandlebarsTemplates['front/class_details'],

  render: function() {
    this.$el.html(this.template({
      thai_language: this.thai_language(),
      thank_you: this.thank_you(),
      // class_time: this.model.toJSON().class_time_scheduled
    }));

    return this;
  }

});

