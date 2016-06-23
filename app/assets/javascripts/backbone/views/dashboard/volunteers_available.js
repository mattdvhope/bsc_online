var VolunteersAvailableView = Backbone.View.extend({
  template:  HandlebarsTemplates['dashboard/volunteers_available'],

  initialize: function() {
    this.$el.appendTo(".entire");
  },

  no_volunteers: function() {
    var vol_num = this.collection.length
    if (vol_num === 0) { 
      return true
    }
    else {
      return false
    }
  },

  render: function() {
    this.$el.html(this.template({
      no_volunteers: this.no_volunteers(),
      volunteers: this.collection.toJSON()

    }));

    return this;
  }
});


