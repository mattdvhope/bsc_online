class PagesController < ApplicationController

  # before_action :require_leader, :only => [:guest_students]

  include ApplicationHelper

  def front
    gon.page_needed = "front"
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
    gon.page_needed = "leader"
    gon.students = User.where("users.role = ?", "student").where("users.guest = ?", "TRUE")
    @user = current_user
  end

  def admin
    gon.page_needed = "admin"
    gon.students = User.where("users.role = ?", "student").where("users.guest = ?", "TRUE")
    @user = current_user
  end

  def guest_students
    @guest_students = User.where("users.role = ?", "student").where("users.guest = ?", "TRUE")
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
