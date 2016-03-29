var NavBarView = Backbone.View.extend({
  template:  HandlebarsTemplates['nav_bar/nav_bar'],
  render: function(visible) {
    this.$el.html(this.template({
      volunteer_page_below: this.volunteer_page_visible(),
      thai_language: this.app_language_is_thai()
    }));
  },
  volunteer_page_visible: function() {
    return $(".entire-vol").is(":visible");
  },
  app_language_is_thai: function() {
    return sessionStorage.getItem('language') === "thai";
  },
  initialize: function() {
    this.$el.appendTo(".entire-nav");
  }
});

