var FooterFrontView = Backbone.View.extend({
  // id: "contact-us",
  initialize: function() {
    this.$el.appendTo(".entire-footer");
  },
  templateFooter:  HandlebarsTemplates['footer/footer'],
  window_big: function() {
    return $(window).width() >= 1260
  },
  window_medium: function() {
    return $(window).width() >= 768 && $(window).width() < 1260
  },
  window_smaller: function() {
    return $(window).width() >= 550 && $(window).width() < 768
  },
  telephone: function() {
    return choose_language("Telephone:", "เบอร์โทรศัพท์");
  },
  contact_us: function() {
    return choose_language("Contact Us", "ติดต่อเรา");
  },
  render: function() {
    this.$el.html(this.templateFooter({
      window_big: this.window_big(),
      window_medium: this.window_medium(),
      window_smaller: this.window_smaller(),
      thai_language: thai_language(),
      telephone: this.telephone(),
      contact_us: this.contact_us()
    }));
  }
});





