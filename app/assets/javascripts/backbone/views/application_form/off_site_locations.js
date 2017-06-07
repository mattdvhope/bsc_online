var OffSiteLocationsView = Backbone.View.extend({

  template:  HandlebarsTemplates['application_form/off_site_locations'],

  initialize: function() {
    this.$el.appendTo(".entire");
  },

  render: function() {
    $("#off-site-fields").html(this.template({
      off_site_locations: this.collection
    }));

    return this;
  }
  
});


