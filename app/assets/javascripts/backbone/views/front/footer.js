var FooterFrontView = Backbone.View.extend({
  templateFooterFront:  HandlebarsTemplates['front/footer'],
  render: function() {
    this.$el.html(this.templateFooterFront());
  },
  initialize: function() {
    this.$el.appendTo(".entire-footer"); //?????????
  }
});





