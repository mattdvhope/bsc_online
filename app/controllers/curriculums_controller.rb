class CurriculumsController < ApplicationController

  def index
    @curriculums = Curriculum.all # pagination later?
  end

  def show
    @curriculum = Curriculum.find(params[:id])
  end

end
