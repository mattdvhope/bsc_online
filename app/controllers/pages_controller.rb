class PagesController < ApplicationController

  include ApplicationHelper

  def front
    @curriculums = Curriculum.all

    if current_user && current_user.role == "leader"
      redirect_to leader_page_path
    elsif current_user
      redirect_to home_path
    end
  end

  def volunteer_info
    redirect_to root_path
  end

  def dashboard
    gon.student_id = current_user.id
    if current_user.role == "admin_applicant"
      redirect_to log_out_path
    end
    @volunteers = User.where("users.role = ? OR users.role = ? OR users.role = ?", "leader", "admin", "volunteer")

  end

  def leader_page
    @admin_applications = AdminApplication.all.order("id ASC")
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
