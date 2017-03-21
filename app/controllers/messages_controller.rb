class MessagesController < ApplicationController

  def create
    message = Message.new(message_params)
    message.user = current_user
    if message.save
      # A broadcasting is a pub/sub link where anything
      # transmitted by a publisher is routed directly
      # to the channel subscribers who are streaming
      # that named broadcasting. Each channel can be
      # streaming zero or more broadcastings.

      # ActionCable.server.broadcast 'messages', # 'messages' is the name of the channel to which we are broadcasting
      #   message: message.content,
      #   user: message.user.first_name
      # This places a message in the current subscription adapter's
      # (in cable.yml) pubsub queue under a separate broadcasting
      # name for each user.
      
      head :ok
    # else 
    #   redirect_to chatrooms_path
    end
  end

  private

    def message_params
      params.require(:message).permit(:content, :chatroom_id)
    end

end
