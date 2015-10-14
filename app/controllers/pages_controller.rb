class PagesController < ApplicationController

  def front
    redirect_to home_path if current_user
    @curriculums = Curriculum.all
  end

  def contact    
  end

  def build
    redirect_to home_path unless current_user.overseer_admin?
    @curriculums = Curriculum.all
  end

end
