var DashboardView = Backbone.View.extend({
  template:  HandlebarsTemplates['dashboard/dashboard'],
  no_students: function() {
    var student_popul = gon.students.length
    if (student_popul === 0) { 
      return true
    }
    else {
      return false
    }
  },
  render: function() {
console.log(this.model.get("first_name"));
    this.$el.html(this.template({
      first_name: this.model.get("first_name"),
      role: this.model.get("role"),
      // no_students: this.no_students(),
      // students: gon.students
    }));
  },
  initialize: function() {
    // this.listenTo(this.model, 'sync', this.render());
    this.$el.appendTo(".entire");
  }
});


