class ConversationEnglishZeroThaisController < ApplicationController

  def show
    @conversation = Conversation.find(params[:id])
    @conversation_english_zero_thai = ConversationEnglishZeroThai.find(params[:id])
  end

end
