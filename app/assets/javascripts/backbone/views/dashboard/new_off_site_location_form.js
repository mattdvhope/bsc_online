var NewOffSiteLocationForm = Backbone.View.extend({

  initialize: function() {
    this.$el.appendTo("#for-attaching-form");
  },

  template:  HandlebarsTemplates['dashboard/new_off_site_location_form'],

  render: function() {
    var csrf_token = $('meta[name=csrf-token]').attr('content');
    this.$el.html(this.template({
      token: csrf_token
    }));

    var edit_off_site_location_form = new EditOffSiteLocation({collection: this.collection, model: this.model});
    edit_off_site_location_form.render();

    return this;
  }
});


