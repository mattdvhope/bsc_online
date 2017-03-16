Appp.messages = Appp.cable.subscriptions.create("MessagesChannel", {


  connected: function() {
  },   // when .create is invoked, it will invoke the MessagesChannel#subscribed method, which is in fact a callback method.
  disconnected: function() {
  },
  received: function(data) { // 'data' is from 'messages_controller.rb'..the hash key-value pairs (message & user)
    $("#messages").removeClass('hidden')
    return $('#messages').append(this.renderMessage(data));
  },

  renderMessage: function(data) {
    return "<p> <b>" + data.user + ": </b>" + data.message + "</p>";
  }
});