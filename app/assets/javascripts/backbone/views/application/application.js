var ApplicationView = Backbone.View.extend({

  template:  HandlebarsTemplates['application/application'],

  events: {},

  initialize: function() {

  },

  render: function() {
console.log(this.el);
    this.$el.html(this.template({}));

    return this;
  }

});

