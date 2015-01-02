class CoursesController < ApplicationController

  before_action :require_user, :only => [:show]

  def show
    @course = Course.find(1)
  end

  def index    
  end

end
