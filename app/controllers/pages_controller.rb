class PagesController < ApplicationController

  include ApplicationHelper

  def front
    redirect_to home_path if current_user
    @curriculums = Curriculum.all
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
