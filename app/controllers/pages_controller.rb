class PagesController < ApplicationController

  def front
    redirect_to home_path if current_user
    @curriculums = Curriculum.all
  end

  def admin_intro
  end

  def dashboard
    @admin_applications = AdminApplication.all
    # @admin_applications = []
    # AdminApplication.find_each do |application|
    #   if application.user.role != "admin"
    #     @admin_applications << application
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
