var LocationPicturesView = Backbone.View.extend({
  attributes: {
    id: "location-pictures-modal"
  },

  initialize: function() {},

  events: {},

  template:  HandlebarsTemplates['footer/location_pictures'],

  render: function() {
    this.$el.html(this.template({
    }));

    return this;
  }
});





