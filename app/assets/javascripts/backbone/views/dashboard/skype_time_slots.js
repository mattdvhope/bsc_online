var SkypeTimeSlotsView = Backbone.View.extend({

  template:  HandlebarsTemplates['dashboard/skype_time_slots'],

  render: function() {
    var view_context = this;
    var collection = new SkypeTimeSlots();
    var promise = new Promise(function(resolve, reject) {
      resolve(collection.fetch());
    });

    promise
    .then(function(collection_objects) {
      var time_slots = [];
      collection_objects.forEach(function(skypetimeslot) {
        time_slots.push(skypetimeslot.day + " " + skypetimeslot.time_period + " " + skypetimeslot.am_pm);
      });

      $("#time-slot-template").remove();
      $("#list-avail-skype").after(
        view_context.template({
          no_time_slots: noTimeSlots(),
          time_slots: time_slots
        })
      );
      function noTimeSlots() {
        return collection_objects.length === 0;
      }
    }) // then
    .catch(function(error) {
      console.log(error);
    });
  }

});
