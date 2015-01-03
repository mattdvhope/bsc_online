class PracticePhrasesController < ApplicationController

  def show
    @practice = Practice.find(params[:id])
    @practice_phrase = PracticePhrase.find(params[:id])
  end

end
