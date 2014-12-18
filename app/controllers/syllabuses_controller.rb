class SyllabusesController < ApplicationController

  before_action :require_user

  def new
    @syllabus = Syllabus.new
  end

  def index
    @syllabuses = current_user.syllabuses
    if current_user.syllabuses == []
      redirect_to new_syllabus_path 
    else
      render 'index'
    end
  end

  def create
    
  end

  def show
    @syllabus = Syllabus.find(params[:id])
  end



end
