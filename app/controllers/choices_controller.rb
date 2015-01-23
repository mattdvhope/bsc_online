class ChoicesController < ApplicationController

  before_action :require_user

  def edit
    respond_to do |format|
      format.js   {
        @choice = Choice.find(params[:id])
        choices = @choice.question.choices.where(student_id: current_user.id)
        choices.each do |choice|
          choice.update_column(:selected, false)
# binding.pry
        end
        @choice.update_column(:selected, true)
      }
    end
    redirect_to curriculum_course_assessment_path(@choice.answer.question.assessment.course.curriculum, @choice.answer.question.assessment.course, @choice.answer.question.assessment)
  end

end