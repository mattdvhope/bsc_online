var VolunteersForStudentsView = Backbone.View.extend({
  template:  HandlebarsTemplates['dashboard/volunteers_for_students'],

  initialize: function() {
    this.$el.appendTo(".entire");
  },

  render: function() {
    var slots_taken = this.collection;

console.log(slots_taken);

    slots_taken.forEach(function(slot_taken) {
      slot_taken.volunteer.first_name
      slot_taken.student.first_name

    });

    this.$el.html(this.template({
      slots_taken: this.slots_taken
    }));

    return this;
  }
});


