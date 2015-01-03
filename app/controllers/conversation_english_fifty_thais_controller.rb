class ConversationEnglishFiftyThaisController < ApplicationController

  def show
    @conversation = Conversation.find(params[:id])
    @conversation_english_fifty_thai = ConversationEnglishFiftyThai.find(params[:id])
  end

end
