class CoursesController < ApplicationController

  before_action :require_user, :only => [:edit]

  def show
    @course = Course.find(1)
  end

  def edit
    @course = Course.find(params[:id])
    if @course.curriculum.plans.find_by(student_id: current_user.id)
    else
      flash[:danger] = "You were not able to Register"
      render :new
    end
  end

  def index    
  end

end
