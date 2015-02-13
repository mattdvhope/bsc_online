class LessonsController < ApplicationController

  def show
    @lesson = Lesson.find(params[:id])
    @assessment = @lesson.assessments.first
  end

end
