var MainFrontView = Backbone.View.extend({
  templateMainFront:  HandlebarsTemplates['front/main'],
  render: function() {
    this.$el.html(this.templateMainFront());
  },
  initialize: function() {
    this.$el.appendTo(".entire-main");
  }
});


