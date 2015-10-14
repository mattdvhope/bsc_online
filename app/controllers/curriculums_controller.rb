class CurriculumsController < ApplicationController

  def index
    @curriculums = Curriculum.all
  end

  def show
    @curriculum = Curriculum.find(params[:id])
    @curriculums = Curriculum.all
# binding.pry
  end

end
