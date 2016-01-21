var MainThaiView = Backbone.View.extend({
  templateMainThaiFront:  HandlebarsTemplates['front/main_thai'],
  render: function() {
    this.$el.html(this.templateMainThaiFront());
  },
  initialize: function() {
    this.$el.appendTo(".entire-main");
  }
});


