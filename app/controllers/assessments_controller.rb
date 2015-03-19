class AssessmentsController < ApplicationController

  before_action :require_user

  def show
    @assessment = Assessment.find(params[:id])
    @grade = grade_for_view(@assessment)
    if @assessment.questions.size == 0 # This 'if & else' is only for when the admin first creates an assessment.  It's not for the regular user/student.
      flash[:danger] = "You need to put questions & answers in. Try again."
      @assessment.destroy
      redirect_to new_curriculum_course_admin_assessment_path
    else
      if @assessment.answers_of_student_not_all_chosen_yet?(current_user)
        @assessment.instantiate_new_choices_for_all_answers_for_new_student(current_user)
      end
    end
  end

  private

    def grade_for_view(assessment)
      if !assessment.provide_grade_object_for_this_assessment(current_user)
        make_grade_object_for_this_assessment_for_this_student(assessment)
      else
        assessment.provide_grade_object_for_this_assessment(current_user)
      end
    end

    def make_grade_object_for_this_assessment_for_this_student(assessment)
      Grade.create(student_id: current_user.id, assessment_id: assessment.id)
    end

end
