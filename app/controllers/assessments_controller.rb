class AssessmentsController < ApplicationController

  before_action :require_user

  def index
    @assessments = Assessment.all
  end

  def show
    @assessment = Assessment.find(params[:id])
    if @assessment.questions.first.choices.size == 0
      @assessment.instantiate_new_choices_for_all_answers_for_new_student(current_user)
    end
  end

end
