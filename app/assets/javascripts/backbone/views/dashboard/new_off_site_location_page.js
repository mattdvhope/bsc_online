var NewOffSiteLocationView = Backbone.View.extend({
  initialize: function(options) {
    this.refreshed = options.refreshed;
    this.$el.appendTo(".entire");
  },

  template:  HandlebarsTemplates['dashboard/new_off_site_location_page'],

  render: function() {
    var leader = this.model.toJSON().first_name;
    var off_site_locations = this.collection;
    var not_completed = [];
    off_site_locations.forEach(function(loc) {
      if (loc.completed !== true) {
        not_completed.push(loc)
      }
    });

    not_completed.sort(function(a, b) {
      return parseFloat(a.timestamp) - parseFloat(b.timestamp);
    });

    this.$el.html(this.template({
      leader: leader,
      not_completed: not_completed
    }));

    var new_off_site_location_form = new  NewOffSiteLocationForm({collection: this.collection, model: this.model});
    new_off_site_location_form.render();

    return this;
  }
});
