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

  sorted_class_times: function() {
    return this.collection.sort(function(a, b) {
      return a.order_no - b.order_no;
    });
  },

  render: function() {
    this.$el.html(this.template({
      no_class_times: this.no_class_times(),
      class_times: this.sorted_class_times()
    }));

    return this;
  }
});


