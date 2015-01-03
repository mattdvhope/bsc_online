class TextEnglishZeroThaisController < ApplicationController

  def show
    @story = Story.find(params[:id])
    @text_english_zero_thai = TextEnglishZeroThai.find(params[:id])
  end

end
