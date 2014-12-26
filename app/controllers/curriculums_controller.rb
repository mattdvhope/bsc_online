class CurriculumsController < ApplicationController

  def index
    @curriculums = Curriculum.all
  end

  def show
    if current_user
      redirect_to course_registrations_path
    else
      @curriculum = Curriculum.find(params[:id])
    end
  end

end
