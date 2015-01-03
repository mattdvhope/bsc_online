class TextHundredThaisController < ApplicationController

  def show
    @story = Story.find(params[:id])
    @text_hundred_thai = TextHundredThai.find(params[:id])
  end

end
