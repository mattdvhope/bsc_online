class EventsController < ApplicationController

  def index
    @lesson = Lesson.find(params[:lesson_id])
    @conversations = @lesson.conversations
  end

  def new
    @conversation = Conversation.find(params[:id])
  end

end
