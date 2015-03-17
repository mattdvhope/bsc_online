class LessonsController < ApplicationController

  def show
    @lesson = Lesson.find(params[:id])
    @assessment = @lesson.provide_assessment_object
  end

end
