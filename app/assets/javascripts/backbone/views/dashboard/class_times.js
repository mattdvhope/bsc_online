var ClassTimesView = Backbone.View.extend({
  template:  HandlebarsTemplates['dashboard/schedule'],

  initialize: function() {
    // this.listenTo(this.collection, 'all', this.render);
    this.$el.appendTo(".entire");
  },

  no_students: function() {
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
      no_students: this.no_students()

    }));

    return this;
  }
});

