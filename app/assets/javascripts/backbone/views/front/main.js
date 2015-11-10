var MainFrontView = Backbone.View.extend({
  attributes: {
    // id: "entry_form_modal"
  },
  events: {
    // "click a.close": "close"
  },
  templateMainFront:  HandlebarsTemplates['front/main'],
  render: function() {
console.log("rendering???");
      this.$el.html(this.templateStudentReg());
  },
  initialize: function() {
console.log(this.$el);
    this.$el.appendTo(".entire-main");
  }
});





