class VolunteerForStudentController < ApplicationController

  before_action :require_user, :only => [:show]

  def index
    @skype_time_slots = SkypeTimeSlot.where(available: false)
  end

  def show
    @volunteer = User.find(params[:id]) # the volunteer (not current_user)
    send_both_people_emails(@volunteer, current_user)
  end

  private

    def send_both_people_emails(volunteer, student)
      if Rails.env.production?
        AppMailer.volunteer_for_student(volunteer, student).deliver_later
        AppMailer.volunteer_for_student_to_student(volunteer, student).deliver_later
      else
        AppMailer.development_env_email(volunteer).deliver_later
      end
    end

end
