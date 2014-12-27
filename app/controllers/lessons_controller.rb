class LessonsController < ApplicationController

  def index
    
  end

  def show
    @lesson = Lesson.find(params[:id])
  end

end
