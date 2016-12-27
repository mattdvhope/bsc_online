var HistoryView = Backbone.View.extend({
  initialize: function() {},
  events: {},

  thai_language: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  history: function() {
    return this.choose_language("History...", "ประวัติศาสตร์...");
  },

  choose_language: function(english, thai) {
    if (this.thai_language()) {
      return thai
    } else {
      return english;
    }
  },

  template:  HandlebarsTemplates['front/history'],

  render: function() {
    this.$el.html(this.template({
      thai_language: this.thai_language(),
      history: this.history()
    }));

    return this;
  }

});

