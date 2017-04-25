var BusinessPageView = Backbone.View.extend({
  initialize: function(options) {
    // this.refreshed = options.refreshed;
    this.$el.appendTo(".entire");
  },

  template:  HandlebarsTemplates['business/business'],

  business_page: function() {
    return choose_language("Business Page", "หน้าธุรกิจ");
  },

  render: function() {

    this.$el.html(this.template({
      business_page: this.business_page(),
      // thai_language: thai_language(),

    }));

    return this;
  }
});


