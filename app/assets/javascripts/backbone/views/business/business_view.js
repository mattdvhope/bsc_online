var BusinessPageView = Backbone.View.extend({
  initialize: function(options) {
    // this.refreshed = options.refreshed;
    this.$el.appendTo(".entire");
  },

  template:  HandlebarsTemplates['business/business'],

  render: function() {

    this.$el.html(this.template({

    }));

    return this;
  }
});


