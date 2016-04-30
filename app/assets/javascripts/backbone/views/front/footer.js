var FooterFrontView = Backbone.View.extend({
  templateFooterFront:  HandlebarsTemplates['front/footer'],
  render: function() {
    this.$el.html(this.templateFooterFront({
      window_big: this.window_width_wide(),
      window_medium: this.window_width_medium(),
      window_smaller: this.window_width_smaller(),
      thai_language: this.app_language_is_thai()
    }));
  },
  window_width_wide: function() {
    return $(window).width() >= 1270
  },
  window_width_medium: function() {
    return $(window).width() >= 768 && $(window).width() < 1270
  },
  window_width_smaller: function() {
    return $(window).width() >= 550 && $(window).width() < 768
  },
  app_language_is_thai: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  initialize: function() {
    this.$el.appendTo(".entire-footer");
  }
});





