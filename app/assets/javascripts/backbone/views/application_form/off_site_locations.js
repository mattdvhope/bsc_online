var OffSiteLocationsView = Backbone.View.extend({

  initialize: function() {
    this.$el.appendTo(".entire");
  },

  template:  HandlebarsTemplates['application_form/off_site_locations'],

  render: function() {

    if (this.model) {
      console.log("model here");
    } else {
      $("#off-site-fields").html(this.template({
        thai_language: thai_language(),
        off_site_locations: this.collection
      }));
    }

    return this;
  }

});


