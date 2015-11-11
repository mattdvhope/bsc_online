var MainFrontView = Backbone.View.extend({
  attributes: {
    // id: "entry_form_modal"
  },
  templateMainFront:  HandlebarsTemplates['front/main'],
  render: function() {
    this.$el.html(this.templateMainFront());
  },
  initialize: function() {
    this.$el.appendTo(".entire-main");
  }
});


