class AssessmentsController < ApplicationController

  before_action :require_user

  respond_to :json

  def show
    @assessment = Assessment.find(params[:id])
    # @answers_choices = @assessment.hash_of_answers_and_student_choices(current_user)
    # @grade = grade_for_assessment_completed_button(@assessment)
    # if @assessment.questions.size == 0 # This 'if' is only for when the admin works on an assessment.  It's not for the regular user/student.
    #   flash[:danger] = "You need to put questions & answers in. Try again."
    #   @assessment.destroy
    #   redirect_to new_curriculum_course_admin_assessment_path
    # end
  end

  private

    def grade_for_assessment_completed_button(assessment)
      if !assessment.provide_existing_grade_object_for_this_assessment(current_user)
        make_grade_object_for_this_assessment_for_this_student(assessment)
      else
        assessment.provide_existing_grade_object_for_this_assessment(current_user)
      end
    end

    def make_grade_object_for_this_assessment_for_this_student(assessment)
      Grade.create(student_id: current_user.id, assessment_id: assessment.id)
    end

end
