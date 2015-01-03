class ConversationHundredThaisController < ApplicationController

  def show
    @conversation = Conversation.find(params[:id])
    @conversation_hundred_thai = ConversationHundredThai.find(params[:id])
  end

end
