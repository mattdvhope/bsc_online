var DashboardView = Backbone.View.extend({
  template:  HandlebarsTemplates['dashboard/dashboard'],
  no_students: function() {
    var guest_st_num = App.guest_student_collection.length
    if (guest_st_num === 0) { 
      return true
    }
    else {
      return false
    }
  },
  render: function() {
    this.$el.html(this.template({
      first_name: this.model.get("first_name"),
      role: this.model.get("role"),
      // no_students: this.no_students(),
      students: App.guest_students
    }));
  },
  initialize: function() {
    // this.listenTo(this.model, 'sync', this.render());
    this.$el.appendTo(".entire");
  }
});


