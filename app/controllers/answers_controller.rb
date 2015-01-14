class AnswersController < ApplicationController

  def show
    @answer = Answer.find(params[:id])
    determine_which_is_correct
  end

  def determine_which_is_correct
    
binding.pry    
  end

end