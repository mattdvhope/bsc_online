var NewClassTimeView = Backbone.View.extend({
  initialize: function(options) {
    this.refreshed = options.refreshed;
    this.$el.appendTo(".entire");
  },

  template:  HandlebarsTemplates['dashboard/new_class_time_page'],

  render: function() {

    var class_times = this.collection.sort(function (a, b) {
      if (a.order_no > b.order_no) {
        return 1;
      }
      if (a.order_no < b.order_no) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    var leader = this.model;
    this.$el.html(this.template({
      leader: leader.get("first_name"),
      class_times: class_times,
      refreshed: this.refreshed
    }));

    var new_class_time_form = new  NewClassTimeForm({collection: this.collection, model: this.model});
    new_class_time_form.render();

    return this;
  }
});


