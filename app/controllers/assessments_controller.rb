class AssessmentsController < ApplicationController

  before_action :require_user

  def show
    @assessment = Assessment.find(params[:id])
    if @assessment.questions.size == 0
      flash[:danger] = "You need to put questions & answers in. Try again."
      @assessment.destroy
      redirect_to new_curriculum_course_admin_assessment_path
    elsif @assessment.questions.first.choices.size == 0
      @assessment.instantiate_new_choices_for_all_answers_for_new_student(current_user)
    end
  end

end
