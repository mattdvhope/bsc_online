class CoursesController < ApplicationController

  def index
    @curriculums = Curriculum.all
  end

  def show
    @course = Course.find(params[:id])
  end

end
