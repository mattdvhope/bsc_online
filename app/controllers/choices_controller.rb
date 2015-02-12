class ChoicesController < ApplicationController

  before_action :require_user

  def update
    respond_to do |format|
      format.js   {
        @choice = Choice.find(params[:id])
        choices = @choice.question.choices.where(student_id: current_user.id)
        choices.each do |choice|
          choice.update_column(:selected, false)
          choice.answer
        end
        @choice.update_column(:selected, true)
      }
    end
  end

end