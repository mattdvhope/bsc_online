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
# binding.pry
    if current_user
      case current_user.role
      when "admin_applicant"
        redirect_to log_out_path
      when "leader"
# binding.pry
        @admin_applications = AdminApplication.all.order("id ASC")
        gon.page_needed = "leader"
        @user = current_user
      when "admin"
        gon.page_needed = "admin"
        @user = current_user
      when "volunteer"
        redirect_to volunteer_path
      when "student"
        gon.page_needed = "student"
        @user = current_user
      end

      gon.student_id = current_user.id
      @volunteers = User.where("users.role = ? OR users.role = ? OR users.role = ?", "leader", "admin", "volunteer")
    else
      redirect_to root_path
    end
  end

  def leader
    @admin_applications = AdminApplication.all.order("id ASC")
    gon.page_needed = "leader"
    @user = current_user
    # redirect_to dashboard_path
  end

  def admin
    gon.page_needed = "admin"
    @user = current_user
    # redirect_to dashboard_path
  end

  def students
    @students = User.where("users.role = ?", "student")
  end

  def volunteer
  end

  def student
    # @volunteers = User.where("users.role = ? OR users.role = ? OR users.role = ?", "leader", "admin", "volunteer")
    gon.page_needed = "student"
    @user = current_user
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
