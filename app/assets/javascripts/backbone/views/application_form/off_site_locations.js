var OffSiteLocationsView = Backbone.View.extend({
  template:  HandlebarsTemplates['application_form/off_site_locations'],

  initialize: function() {
    this.$el.appendTo(".entire");
  },

  render: function() {
console.log(this.collection);
    // this.$el.html(this.template({
      // no_class_times: this.no_class_times(),
      // class_times: this.sorted_class_times()
    // }));

    // return this;
  }
});


