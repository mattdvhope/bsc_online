class MessagesChannel < ApplicationCable::Channel
  def subscribed # 'subscribed' is invoked when 'App.cable.subscriptions.create' is invoked in 'js/channels/messages.js'
    stream_from 'messages' # 'messages' is a channel
  end #MessagesChannel#subscribed streams from our messages broadcast, sending along any new messages as JSON to the client-side subscription function.

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
