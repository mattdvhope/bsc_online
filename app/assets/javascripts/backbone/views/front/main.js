var MainFrontView = Backbone.View.extend({
  attributes: {
    // id: "entry_form_modal"
  },
  events: {
    "click span a.link-button": "logInStudent"
  },
  logInStudent: function() {
    App.getLogInForm("Student");
  },
  templateMainFront:  HandlebarsTemplates['front/main'],
  render: function() {
    this.$el.html(this.templateMainFront());
  },
  initialize: function() {
    this.$el.appendTo(".entire-main");
  }
});


