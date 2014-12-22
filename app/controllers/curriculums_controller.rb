class CurriculumsController < ApplicationController

  def index
    @curriculums = Curriculum.all
  end

  def show
    if current_user
      redirect_to 
    else
      @curriculum = Curriculum.find(params[:id])
      render 'show'
    end
  end

end
