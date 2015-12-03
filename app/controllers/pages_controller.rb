class PagesController < ApplicationController

  def front
    redirect_to home_path if current_user
    @curriculums = Curriculum.all
  end

  def volunteer_intro
    # redirect_to home_path if current_user
  end

  def dashboard
    # @volunteer_applications = VolunteerApplication.where(user: )
    # @volunteer_applications = VolunteerApplication.joins(:addresses).where("addresses.country = ?", "Poland").preload(:addresses)
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
