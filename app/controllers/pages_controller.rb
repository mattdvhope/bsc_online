class PagesController < ApplicationController

  def front
    redirect_to home_path if current_user
    @curriculums = Curriculum.all
  end

  def volunteer_intro
  end

  def contact    
  end

  def about    
  end

  def build
    redirect_to home_path unless current_user.admin?
    @curriculums = Curriculum.all
  end

end
