var VolunteerPageView = Backbone.View.extend({
  template:  HandlebarsTemplates['volunteer/volunteer_info'],
  fadeOut: function() {
    this.$el.fadeOut(0, function() {
      this.remove();
    }.bind(this));
    App.getFrontMainPage();
  },
  render: function() {
    this.$el.html(this.template({
      thai_flag_present: this.thai_flag_up()

    }));
  },
  thai_flag_up: function() {
    return $(".thai_flag").is(":visible");
  },

  switch_languages: function(english, thai) {
    if (this.thai_flag_up()) {
      return english;
    } else {
      return thai
    }
  },
  initialize: function() {
    this.$el.appendTo(".entire-main");
  }
});


