Appp.volunteer_restoration = Appp.cable.subscriptions.create({channel: "VolunteerRestorationChannel"}, {
                                // when .create is invoked, it will invoke the VolunteerRestorationChannel#subscribed method (in Rails), which is in fact a callback method.
  connected: function() {
    console.log("connected to ActionCable");
  },
  disconnected: function() {
    console.log("disconnected from ActionCable");
  },
  received: function(data) {

  },

});

