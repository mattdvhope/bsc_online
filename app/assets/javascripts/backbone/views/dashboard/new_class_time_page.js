var NewClassTimeView = Backbone.View.extend({
  initialize: function() {
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
    var csrf_token = $('meta[name=csrf-token]').attr('content');
    this.$el.html(this.template({
      token: csrf_token,
      leader: leader.get("first_name"),
      class_times: class_times,
    }));

    return this;
  }
});


