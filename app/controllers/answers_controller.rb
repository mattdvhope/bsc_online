class AnswersController < ApplicationController

  before_action :require_user

  def show
    @answer = Answer.find(params[:id])
    indicate_whether_answer_correct
  end

  def indicate_whether_answer_correct
    if @answer.correct?
      flash[:success] = "CORRECT!!!"
      redirect_to assessment_path(@answer.question.assessment)
    else
      flash[:danger] = "WRONG!!!"
      redirect_to assessment_path(@answer.question.assessment)
    end
  end

end