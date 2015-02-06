class AssessmentsController < ApplicationController

  before_action :require_user

  def show
    @assessment = Assessment.find(params[:id])
    if @assessment.questions.size == 0 # This 'if' is only for when the admin first creates an assessment.  It's not for the regular user/student.
      flash[:danger] = "You need to put questions & answers in. Try again."
      @assessment.destroy
      redirect_to new_curriculum_course_admin_assessment_path
    else # This 'else' is for the regular student/user using an already-created assessment.
      if @assessment.questions.first.answers.first.choices.where(student_id: current_user.id).count == 0
        @assessment.instantiate_new_choices_for_all_answers_for_new_student(current_user)
      end
    end
  end

end
