class PracticeSentencesController < ApplicationController

  def show
    @practice = Practice.find(params[:id])
    @practice_sentence = PracticeSentence.find(params[:id])
  end

end
