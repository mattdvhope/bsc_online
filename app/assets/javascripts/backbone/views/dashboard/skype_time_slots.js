var SkypeTimeSlotsView = Backbone.View.extend({

  template:  HandlebarsTemplates['dashboard/skype_time_slots'],

  render: function() {
    var view_context = this;
    var collection = new SkypeTimeSlots();
    collection.fetch({
      success: function (collection, response, options) {
        var time_slots = [];
        collection.forEach(function(skypetimeslot) {
          time_slots.push(skypetimeslot.get("day") + " " + skypetimeslot.get("time_period") + " " + skypetimeslot.get("am_pm"));
        });
        function noTimeSlots() {
          return collection.length === 0;
        }

        $("#ul-list-of-time-slots").remove();
        $("#test-slot-list").append(
          view_context.template({
            time_slots: time_slots
          })
        );

      }, // success
      error: function (collection, response, options) {
        console.log("error");
      }
    }); // collection.fetch
  } // render:

});
