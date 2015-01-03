class TextEnglishSeventyThaisController < ApplicationController

  def show
    @story = Story.find(params[:id])
    @text_english_seventy_thai = TextEnglishSeventyThai.find(params[:id])
  end

end
