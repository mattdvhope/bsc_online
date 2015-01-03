class PracticeVocabulariesController < ApplicationController

  def show
    @practice = Practice.find(params[:id])
    @practice_vocabulary = PracticeVocabulary.find(params[:id])
  end

end
