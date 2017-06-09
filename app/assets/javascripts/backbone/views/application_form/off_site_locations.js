var OffSiteLocationsView = Backbone.View.extend({

  initialize: function() {
    this.$el.appendTo(".entire");
  },

  template: HandlebarsTemplates['application_form/off_site_locations'],

  render: function() {
    var off_site_locations = this.collection;
    var not_completed = [];
    off_site_locations.forEach(function(loc) {
      if (loc.completed !== true) {
        not_completed.push(loc)
      }
    });

    $("#off-site-fields").html(this.template({
      thai_language: thai_language(),
      off_site_locations: not_completed
    }));
    return this;
  }

});


