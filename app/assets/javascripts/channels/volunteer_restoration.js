Appp.volunteer_restoration = Appp.cable.subscriptions.create({channel: "VolunteerRestorationChannel"}, {
                                // when .create is invoked, it will invoke the VolunteerRestorationChannel#subscribed method (in Rails), which is in fact a callback method.
  connected: function() {
    console.log("connected to ActionCable");
  },
  disconnected: function() {
    console.log("disconnected from ActionCable");
  },
  received: function(data) {
console.log("In 'VolunteerRestorationChannel'");
console.log(data);

    //!!!!!! Use a conditional 'break' to prevent endless cycling through the 'received' method
    // if (i === 3) { break; }


    $("#vol-avail-template").remove();
    var student = App.presentUserModel();
    App.getVolunteersAvailableView(student);

    // $("#ul-of-vol-avail ul").append('<li><a href="/user/messages"><span class="tab">Message Center</span></a></li>');

    // $("#ul-of-vol-avail").append(
    //   '<li><h2>List item here!!</h2><li>'
    // );

  },

});

