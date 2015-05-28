class ChoicesController < ApplicationController

  respond_to :json

  def show
    respond_with Choice.find(params[:id])
  end

  def update
    @choice = Choice.find(params[:id])
    @choices = @choice.question.hash_of_answers_and_student_choices(current_user)
    @choice.question.answers.each do |answer|
      choice = @choices[answer]
      respond_with choice.update_column(:selected, false)
    end
      respond_with @choice.update_column(:selected, true)
  end

end