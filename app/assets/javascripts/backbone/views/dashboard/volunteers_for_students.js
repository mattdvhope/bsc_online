var VolunteersForStudentsView = Backbone.View.extend({
  template:  HandlebarsTemplates['dashboard/volunteers_for_students'],

  initialize: function() {
    this.$el.appendTo(".entire");
  },

  render: function() {
    var slots_taken = this.collection;

    slots_taken.sort(function (a, b) {
      return a.date_chosen - b.date_chosen;
    });
    slots_taken.sort(function (a, b) {
      return a.month_chosen - b.month_chosen;
    });
    slots_taken.sort(function (a, b) {
      return a.year_chosen - b.year_chosen;
    });

    this.$el.html(this.template({
      slots_taken: slots_taken
    }));

    return this;
  }
});


