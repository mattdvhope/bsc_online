var OffSiteLocationsView = Backbone.View.extend({

  initialize: function() {
    if (!this.model) {
      this.$el.appendTo(".entire");
    }
  },

  template_dash: HandlebarsTemplates['dashboard/off_site_locations'],

  template_appl: HandlebarsTemplates['application_form/off_site_locations'],

  handlebars_data: function() {
    return {
      thai_language: thai_language(),
      off_site_locations: this.collection
    };
  },

  render: function() {
    if (this.model) {
      $('.dash-create-classes').after(this.template_dash(handlebars_data()));
    } else {
      $("#off-site-fields").html(this.template_appl({
        thai_language: thai_language(),
        off_site_locations: this.collection
      }));
    }
    return this;
  }

});


