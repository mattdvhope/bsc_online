class CurriculumsController < ApplicationController

  def index
    @curriculums = Curriculum.all # pagination later?
  end

  def show
    @curriculums = Curriculum.all
    @curriculum = Curriculum.find(params[:id])
  end

end
