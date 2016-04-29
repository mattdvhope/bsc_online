var FooterFrontView = Backbone.View.extend({
  templateFooterFront:  HandlebarsTemplates['front/footer'],
  render: function() {
    this.$el.html(this.templateFooterFront({
      window_big: this.window_width(),
      thai_language: this.app_language_is_thai()
    }));
  },
  window_width: function() {
    return $(window).width() > 550
  },
  app_language_is_thai: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  initialize: function() {
    this.$el.appendTo(".entire-footer");
  }
});





