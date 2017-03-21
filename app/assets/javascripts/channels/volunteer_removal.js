Appp.volunteer_removal = Appp.cable.subscriptions.create({channel: "VolunteerRemovalChannel"}, {
                                // when .create is invoked, it will invoke the VolunteerRemovalChannel#subscribed method (in Rails), which is in fact a callback method.
  connected: function() {
    console.log("connected to ActionCable");
  },
  disconnected: function() {
    console.log("disconnected from ActionCable");
  },
  received: function(data) {
console.log(data);

    $('li[data-volunteer-id="'+ data.volunteer_id + '"]')
    .not('li[data-student-id="'+ data.student_id + '"]').remove();

  },

});

