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
      return collection_objects.sort(function (a, b) {
        return a.ordertime - b.ordertime;
      });
    })
    .then(function(collection_objects) {
      return collection_objects.sort(function (a, b) {
        return a.orderam - b.orderam;
      });
    })
    .then(function(collection_objects) {
      return collection_objects.sort(function (a, b) {
        return a.orderday - b.orderday;
      });
    })
    .then(function(collection_objects) {
      $("#time-slot-template").remove();
      var all_slots = collection_objects.length;
      var num_slots_array = [];
      for (i = 0; i < all_slots+1; i++) { 
        num_slots_array.push(i);
      }

      var hours_ahead = volunteerIsInDaylightSavingsTime() ? 11 : 12;
      $("#list-avail-skype").after(
        view_context.template({
          no_time_slots: noTimeSlots(),
          time_slots: collection_objects,
          all_slots: num_slots_array,
          hours_ahead: hours_ahead
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
