class AnswersController < ApplicationController

  before_action :require_user

  def edit
    @answer = Answer.find(params[:id])
    student_answer = @answer.student_answer
binding.pry
    unless student_answer
      if student_answer.student_id == current_user.id
        respond_to do |format|
          format.js   {
            @answer.question.answers.map do |answer|
              answer.student_answer = nil
            end
            @answer.student_answer = StudentAnswer.new(student_id: current_user.id, answer_id: @answer.id)
          }
        end
      end
    end
    redirect_to assessment_path(@answer.question.assessment)
  end

  def update
    @answer  = Answer.update(answer_params)
  end

  private

  def answer_params
    params.require(:answer).permit(:answer_content, :correct, :student_answer)
  end

end