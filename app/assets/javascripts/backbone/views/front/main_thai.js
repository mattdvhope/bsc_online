var MainThaiView = Backbone.View.extend({
  templateMainThaiFront:  HandlebarsTemplates['front/main_thai'],
  fadeOut: function() {
    this.$el.fadeOut(0, function() {
      this.remove();
    }.bind(this));
    App.getFrontMainPage();
  },
  render: function() {
    this.$el.html(this.templateMainThaiFront());
  },
  initialize: function() {
    this.$el.appendTo(".entire-main");
  }
});


