var HistoryView = Backbone.View.extend({
  initialize: function() {},
  events: {},

  thai_language: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  history: function() {
    return this.choose_language("History...", "ประวัติศาสตร์...");
  },

  content: function() {
    return this.choose_language("<a target='_blank' href='https://en.wikipedia.org/wiki/Dan_Beach_Bradley'>Dan Beach Bradley</a>", "<a target='_blank' href='https://th.wikipedia.org/wiki/แดน_บีช_บรัดเลย์'>แดน บีช บรัดเลย์</a>");
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
      history: this.history(),
      content: this.content()
    }));

    return this;
  }

});

