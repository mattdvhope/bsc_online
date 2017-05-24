var FormerStudentsView = Backbone.View.extend({
  template:  HandlebarsTemplates['dashboard/former_students'],

  initialize: function() {
    this.$el.appendTo(".entire");
  },

  render: function() {
    var students = this.collection;

    students.sort(function(a, b) {
      return a.id - b.id;
    });

    this.$el.html(this.template({
      // no_students: this.no_students(),
      students: students
    }));

    return this;
  }
});


