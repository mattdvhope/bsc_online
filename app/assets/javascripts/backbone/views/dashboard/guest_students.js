var GuestStudentsView = Backbone.View.extend({
  template:  HandlebarsTemplates['dashboard/guest_students'],

  initialize: function() {
    // this.listenTo(this.model, 'all', this.render());
    this.$el.appendTo(".entire");
  }

  no_students: function() {
    var guest_st_num = App.guest_students.length
    if (guest_st_num === 0) { 
      return true
    }
    else {
      return false
    }
  },

  render: function() {
    this.$el.html(this.template({
      no_students: this.no_students(),
      students: App.guest_students
    }));

    return this;
  },
});


