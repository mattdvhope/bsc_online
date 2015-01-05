class ConversationsController < ApplicationController

  def index
    @lesson = Lesson.find(params[:lesson_id])
    @conversations = @lesson.conversations
  end

  def show
    @conversation = Conversation.find(params[:id])
  end

end
