// This assumes you've already requested the right to send
// web notifications.

// Appp.messages = Appp.cable.subscriptions.create({channel: "MessagesChannel"}, {
//                                 // when .create is invoked, it will invoke the MessagesChannel#subscribed method (in Rails), which is in fact a callback method.
//   connected: function() {
//     console.log("connected to ActionCable");
//   },
//   disconnected: function() {
//     console.log("disconnected from ActionCable");
//   },
//   received: function(data) { // 'data' is from 'messages_controller.rb'..the hash key-value pairs (message & user)
//     console.log("in received");
//     $("#messages").removeClass('hidden');
//     return $('#messages').append(this.renderMessage(data));
//   },

//   renderMessage: function(data) {
//     // return $("[data-chatroom='" + data.chatroom_id + "']").append(data.message);
//     return "<p> <b>" + data.user + ": </b>" + data.message + "</p>";
//   }
// });

// // example of re-broadcast...not sure if it works...
// Appp.messages.send({
//   sent_by: "Paul", body: "This is a cool chat app."
// });