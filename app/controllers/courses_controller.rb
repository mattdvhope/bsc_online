class CoursesController < ApplicationController

  before_action :require_user, :only => [:show]

  def show
    @course = Course.find(params[:id])
    if @course.id != 1
      render 'under_construction' 
    end
  end

end
