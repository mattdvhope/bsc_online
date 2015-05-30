class ChoicesController < ApplicationController

  respond_to :json

  def index
    choices = Choice.all.where(student_id: current_user.id)
    respond_with choices
  end

  def show
    respond_with Choice.find(params[:id])
  end

  def update
    @choice = Choice.find(params[:id])
    @choice.selected = true
    @choice.save
# binding.pry
    # @choice = Choice.find(params[:id])
    # @choices = @choice.question.hash_of_answers_and_student_choices(current_user)
    # @choice.question.answers.each do |answer|
    #   choice = @choices[answer]
    #   choice.update_column(:selected, false)
    # end
    #   @choice.update_column(:selected, true)
  end

end