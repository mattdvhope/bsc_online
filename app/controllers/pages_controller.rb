class PagesController < ApplicationController

  include ApplicationHelper

  def front
    gon.page_needed = "front"
    @curriculums = Curriculum.all

    if current_user && current_user.role == "leader"
      redirect_to leader_path
    elsif current_user
      redirect_to home_path
    end
  end

  def volunteer_info
    gon.page_needed = "volunteer_info"
  end

  def dashboard
    case current_user.role
    when "admin_applicant"
      redirect_to log_out_path
    when "leader"
      redirect_to leader_path
    when "admin"
      redirect_to admin_path
    when "volunteer"
      redirect_to volunteer_path
    when "student"
      redirect_to student_path
    end

    gon.student_id = current_user.id
    @volunteers = User.where("users.role = ? OR users.role = ? OR users.role = ?", "leader", "admin", "volunteer")
  end

  def leader
    @admin_applications = AdminApplication.all.order("id ASC")
    @user = current_user
  end

  def admin
    @students = User.where("users.role = ?", "student").where("users.guest = ?", "TRUE")
  end

  def volunteer
  end

  def student
    @volunteers = User.where("users.role = ? OR users.role = ? OR users.role = ?", "leader", "admin", "volunteer")
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
