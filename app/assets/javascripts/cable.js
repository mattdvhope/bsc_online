// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the rails generate channel command.
//
//= require action_cable
//= require_self
//= require_tree ./channels


// Below we'll instantiate our Action Cable consumer on the
// client-side, telling it to initiate a WebSocket
// request, and maintain a persistent connection with
// ws://localhost:3000/cable.
(function() {
  this.Appp || (this.Appp = {});

  Appp.cable = ActionCable.createConsumer();

}).call(this);

// When our client-side consumer code (here), sends
// the WebSocket upgrade request, the server will
// instantiate a new connection object in
// 'app/channels/application_cable/connection.rb'.
// This object will be the parent of all of the channel
// subscriptions you go on to create.
