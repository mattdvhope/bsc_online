var BusinessPageView = Backbone.View.extend({
  initialize: function(options) {
    // this.refreshed = options.refreshed;
    this.$el.appendTo(".entire");
  },

  template:  HandlebarsTemplates['business/business'],

  business_title: function() {
    return choose_language("Business Title", "หน้าธุรกิจ");
  },

  render: function() {

    this.$el.html(this.template({
      business_title: this.business_title(),
      // thai_language: thai_language(),

    }));

    return this;
  }
});


