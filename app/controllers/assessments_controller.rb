class AssessmentsController < ApplicationController

  before_action :require_user

  def show
    @assessment = Assessment.find(params[:id])
    @assessment.instantiate_new_choices_for_all_answers(current_user)
    @answers_choices = @assessment.hash_of_answers_and_student_choices(current_user)
    @grade = grade_for_assessment_completed_button(@assessment)
    if @assessment.questions.size == 0 # This 'if' is only for when the admin first creates an assessment.  It's not for the regular user/student.
      flash[:danger] = "You need to put questions & answers in. Try again."
      @assessment.destroy
      redirect_to new_curriculum_course_admin_assessment_path
    end
  end

  def update
    # Replace the 'show' method above with this 'update' method.
    # In this method, 'update' the Assessment (in which the 'choice' & 'correct' attributes have been replaced by 'correctness' and 'chosen' ['chosen' is a boolean, set to default as 'false']; maybe drop the 'choices' table). 
    # Create a 'simple_form_for' in the new 'update' template for this method.
    # User radio buttons in the 'answers_to_each_question' partial.
    # Radio buttons format:  See http://stackoverflow.com/questions/746387/labels-for-radio-buttons-in-rails-form
    # <%= f.label :answer, 'answer content', :value => 'sms' %>
    # If you make a partial, you'll need to have ALL FOUR radio buttons for EACH QUESTION in that partial.  The whole idea of radio buttons is to choose ONE from a GROUP.
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
