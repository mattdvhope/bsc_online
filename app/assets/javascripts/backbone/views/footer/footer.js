var FooterFrontView = Backbone.View.extend({
  // id: "contact-us",
  templateFooter:  HandlebarsTemplates['footer/footer'],
  render: function() {
    this.$el.html(this.templateFooter({
      window_big: this.window_big(),
      window_medium: this.window_medium(),
      window_smaller: this.window_smaller(),
      thai_language: this.app_language_is_thai(),
      telephone: this.telephone(),
      contact_us: this.contact_us()
    }));
  },
  window_big: function() {
    return $(window).width() >= 1100
  },
  window_medium: function() {
    return $(window).width() >= 768 && $(window).width() < 1100
  },
  window_smaller: function() {
    return $(window).width() >= 550 && $(window).width() < 768
  },
  app_language_is_thai: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  telephone: function() {
    return this.choose_language("Telephone:", "เบอร์โทรศัพท์");
  },
  contact_us: function() {
    return this.choose_language("Contact Us", "ติดต่อเรา");
  },
  choose_language: function(english, thai) {
    if (this.app_language_is_thai()) {
      return thai
    } else {
      return english;
    }
  },
  initialize: function() {
    this.$el.appendTo(".entire-footer");
  }
});





