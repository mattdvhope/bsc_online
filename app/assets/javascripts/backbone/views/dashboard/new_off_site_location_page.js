var NewOffSiteLocationView = Backbone.View.extend({
  initialize: function(options) {
    this.refreshed = options.refreshed;
    this.$el.appendTo(".entire");
  },

  template:  HandlebarsTemplates['dashboard/new_off_site_location_page'],

  render: function() {

    // var class_times = this.collection.sort(function (a, b) {
    //   if (a.order_no > b.order_no) {
    //     return 1;
    //   }
    //   if (a.order_no < b.order_no) {
    //     return -1;
    //   }
    //   // a must be equal to b
    //   return 0;
    // });

    var leader = this.model.toJSON().first_name;
    this.$el.html(this.template({
      leader: leader,
      off_site_locations: this.collection
    }));

    // var new_off_site_location_form = new  NewOffSiteLocationForm({collection: this.collection, model: this.model});
    // new_off_site_location_form.render();

    return this;
  }
});
