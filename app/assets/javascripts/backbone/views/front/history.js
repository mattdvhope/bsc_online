var HistoryView = Backbone.View.extend({

  history: function() {
    return choose_language("History...", "ประวัติศาสตร์...");
  },

  template:  HandlebarsTemplates['front/history'],

  render: function() {
    this.$el.html(this.template({
      thai_language: thai_language(),
      history: this.history()
    }));

    return this;
  }

});

