class PagesController < ApplicationController

  # before_action :require_leader, :only => [:students]

  include ApplicationHelper

  def front
    gon.page_needed = "front"
  end

  def volunteer_info
    gon.page_needed = "volunteer_info"
  end

  def dashboard
    if current_user
      case current_user.role
      when "admin_applicant"
        redirect_to log_out_path
      when "leader"
        # @admin_applications = AdminApplication.all.order("id ASC")
        gon.page_needed = "leader"
      when "admin"
        gon.page_needed = "admin"
      when "volunteer"
        gon.page_needed = "volunteer"
      when "student"
        # @volunteers = User.where("users.role = ? OR users.role = ? OR users.role = ?", "leader", "admin", "volunteer")
        gon.page_needed = "student"
      end
      @user = current_user
    else
      redirect_to root_path
    end
  end

  def students
    @students = User.where("users.role = ?", "student")
  end

  def contact
  end

  def about    
  end

  def build
    redirect_to home_path unless current_user.leader?
    @curriculums = Curriculum.all
  end

end
