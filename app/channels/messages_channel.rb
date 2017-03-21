class MessagesChannel < ApplicationCable::Channel
  def subscribed # 'subscribed' is invoked when 'App.cable.subscriptions.create' is invoked in 'js/channels/messages.js'

    # Our MessagesChannel instance will respond to the #current_user
    # method by delegating it to the connection instance.

    # stream_from 'messages' # 'messages' is a channel
  end #MessagesChannel#subscribed streams from our messages broadcast, sending along any new messages as JSON to the client-side subscription function.

# Streams provide the mechanism by which channels route
# published content (broadcasts) to their subscribers.


    # A common use case is to rebroadcast a message sent
    # by one client to any other connected clients. Not sure
    # if it works here...
    # def receive(data) #...to rebroadcast....
    #   ActionCable.server.broadcast("messages", data)
    # end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
