class PracticesController < ApplicationController

  def index
    @lesson = Lesson.find(params[:lesson_id])
    @practices = @lesson.practices
  end

  def show
    @practice = Practice.find(params[:id])
  end

end
