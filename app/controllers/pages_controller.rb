class PagesController < ApplicationController

  include ApplicationHelper

  def front
    gon.page_needed = "front"
  end

  def volunteer_info # This is here only for a page refresh in the '/volunteer_info' page, but I don't need this at all for the '/volunteer_info' link in nav_bar.hbs which actually uses the 'showVolunteerPage' method in router.js
    gon.page_needed = "volunteer_info"
  end

  def business
    gon.page_needed = "business"
  end

  def new_off_site_location
    gon.page_needed = "new_off_site_location"
    locations = OffSiteLocation.all

    array = []
    locations.each do |loc|
      loc = loc.attributes.merge!(users: loc.users).merge!(timestamp: loc.created_at.to_i)
      array << loc
    end
    @off_site_locations = array.to_json

    if current_user
      gon.user = current_user
    else
      redirect_to root_path
    end
  end

  def new_class_time
    gon.page_needed = "new_class_time"
    gon.current_class_times = ClassTime.all

    if current_user
      gon.user = current_user
    else
      redirect_to root_path
    end
  end

  def dashboard
    if current_user
      gon.user = current_user
      case current_user.role
      when "admin_applicant"
        redirect_to log_out_path
      when "leader"
        # @admin_applications = AdminApplication.all.order("id ASC")
        gon.page_needed = "leader"
      when "admin"
        gon.page_needed = "volunteer"
      when "volunteer"
        gon.page_needed = "volunteer"
      when "student"
        gon.page_needed = "student"
      end
      @user = current_user
    else
      redirect_to root_path
    end
  end

  def applicants_list
    @admin_applications = AdminApplication.all
    if !current_user
      redirect_to root_path
    end
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
