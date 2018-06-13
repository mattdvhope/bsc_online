var ClassTimesView = Backbone.View.extend({
  template:  HandlebarsTemplates['dashboard/class_times'],

  initialize: function() {
    this.$el.appendTo(".entire");
  },

  no_class_times: function() {
    var student_num = this.collection.length
    if (student_num === 0) { 
      return true
    }
    else {
      return false
    }
  },

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
    this.$el.html(this.template({
      no_class_times: this.no_class_times(),
      class_times_one: this.sorted_class_times_one(),
      class_times_two: this.sorted_class_times_two()
    }));

    return this;
  }
});


