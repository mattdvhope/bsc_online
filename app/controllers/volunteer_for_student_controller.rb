class VolunteerForStudentController < ApplicationController

  before_action :require_user, :only => [:show]

  def show
    @volunteer = User.find(params[:id]) # the volunteer (not current_user)
    slots_of_student = @volunteer.skype_time_slots.where(student_id: current_user.id)
    send_volunteer_email(@volunteer, slots_of_student)
  end

  private

    def send_volunteer_email(volunteer, slots_of_student)
      if Rails.env.production?
        AppMailer.volunteer_welcome(volunteer).deliver_later
      else
        AppMailer.development_env_email(volunteer).deliver_later
      end
    end

end
