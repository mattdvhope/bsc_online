class PagesController < ApplicationController

  include ApplicationHelper

  def front
    redirect_to home_path if current_user
    @curriculums = Curriculum.all
  end

  def admin_intro
  end

  def dashboard
    if current_user.role == "admin_applicant"
      redirect_to log_out_path
    end
    @admin_applications = AdminApplication.all.order("id ASC")
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
