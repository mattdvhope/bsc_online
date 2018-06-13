var NewClassTimeView = Backbone.View.extend({
  initialize: function(options) {
    this.refreshed = options.refreshed;
    this.$el.appendTo(".entire");
  },

  template:  HandlebarsTemplates['dashboard/new_class_time_page'],

  sorted_class_times_one: function() {
    var part1 = this.collection.filter(function (el) {
      return el.part === "one"
    });
    return part1.sort(function(a, b) {
      return a.order_no - b.order_no;
    });
  },

  sorted_class_times_two: function() {
    var part2 = this.collection.filter(function (el) {
      return el.part === "two"
    });
    return part2.sort(function(a, b) {
      return a.order_no - b.order_no;
    });
  },

  render: function() {

    var class_times = this.collection.sort(function (a, b) {
      return a.order_no - b.order_no;
    });

    var leader = this.model;
    this.$el.html(this.template({
      leader: leader.get("first_name"),
      class_times_one: this.sorted_class_times_one(),
      class_times_two: this.sorted_class_times_two(),
      refreshed: this.refreshed
    }));

    var new_class_time_form = new  NewClassTimeForm({collection: this.collection, model: this.model});
    new_class_time_form.render();

    return this;
  }
});


