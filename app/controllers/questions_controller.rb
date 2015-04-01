class QuestionsController < ApplicationController

  def selected_answers
    @data = params[:optradio_1]
  end  

end