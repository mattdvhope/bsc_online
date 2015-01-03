class TextEnglishFiftyThaisController < ApplicationController

  def show
    @story = Story.find(params[:id])
    @text_english_fifty_thai = TextEnglishFiftyThai.find(params[:id])
  end

end
