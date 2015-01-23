class ChoicesController < ApplicationController

  before_action :require_user

  def edit
    respond_to do |format|
      format.js   {
        @choice = StudentAnswer.find(params[:id])
        @choice.answer.question.answers.each do |answer|
          answer.choices.first.update_attributes(choosing: false)
        end
        @choice.update_attributes(choosing: true)
# binding.pry
      }
    end
    redirect_to curriculum_course_assessment_path(@choice.answer.question.assessment.course.curriculum, @choice.answer.question.assessment.course, @choice.answer.question.assessment)
  end

end