class LessonsController < ApplicationController

  def show
    @lesson = Lesson.find(params[:id])
    @assessment = @lesson.provide_assessment_object
    @assessment.make_sure_choices_are_instantiated(current_user)
# binding.pry
  end

end
