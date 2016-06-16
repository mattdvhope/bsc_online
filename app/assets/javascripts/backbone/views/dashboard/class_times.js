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

  

  render: function() {
    this.$el.html(this.template({
      no_class_times: this.no_class_times(),
      class_times: this.collection.toJSON()
    }));

    return this;
  }
});


