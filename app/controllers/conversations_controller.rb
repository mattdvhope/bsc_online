class ConversationsController < ApplicationController

  before_action :require_user

  def index
    @lesson = Lesson.find(params[:lesson_id])
    @conversations = @lesson.conversations
  end

  def show
    @conversation = Conversation.find(params[:id])
  end

end
