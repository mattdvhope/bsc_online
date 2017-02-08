class VolunteerForStudentController < ApplicationController

  before_action :require_user, :only => [:show]

  def show
    @volunteer = User.find(params[:id]) # the volunteer (not current_user)
    # slots = @volunteer.skype_time_slots.where(student_id: current_user.id)
    send_volunteer_email(@volunteer, current_user)
  end

  private

    def send_volunteer_email(volunteer, student)
      if Rails.env.production?
        AppMailer.volunteer_for_student(volunteer, student).deliver_later
      else
        AppMailer.volunteer_for_student(volunteer, student).deliver_later
        # AppMailer.development_env_email(volunteer).deliver_later
      end
    end

end
