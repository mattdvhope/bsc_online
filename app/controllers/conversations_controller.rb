class ConversationsController < ApplicationController

  def show
    @conversation = Conversation.find(params[:id])
  end

end
