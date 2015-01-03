class TextEnglishTwentyThaisController < ApplicationController

  def show
    @story = Story.find(params[:id])
    @text_english_twenty_thai = TextEnglishTwentyThai.find(params[:id])
  end

end
