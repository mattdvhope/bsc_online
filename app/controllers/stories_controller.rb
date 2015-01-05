class StoriesController < ApplicationController

  def index
    @lesson = Lesson.find(params[:lesson_id])
    @stories = @lesson.stories
  end

  def show
    @story = Story.find(params[:id])
  end

end
