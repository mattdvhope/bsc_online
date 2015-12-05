class PagesController < ApplicationController

  def front
    redirect_to home_path if current_user
    @curriculums = Curriculum.all
  end

  def volunteer_intro
  end

  def dashboard
    @volunteer_applications = VolunteerApplication.all
    # @volunteer_applications = []
    # VolunteerApplication.find_each do |application|
    #   if application.user.role != "volunteer"
    #     @volunteer_applications << application
    #   end
    # end
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
