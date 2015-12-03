class VolunteerApplicationsController < ApplicationController

  def edit
    @volunteer_application = VolunteerApplication.find(params[:id])
  end

  def update
    @volunteer_application = VolunteerApplication.find(params[:id])
    if @volunteer_application.update(volunteer_application_params)
      flash[:success] = "Thank you for sending in this CEP Volunteer Application!"
      send_application_emails(@volunteer_application.user)
      redirect_to root_path
    else
      flash[:danger] = "Your Application did not go through."
      redirect_to :back
    end
  end

  private

    def volunteer_application_params
      params.require(:volunteer_application).permit(:response_first, :response_second, :response_third)
    end

    def send_application_emails(applicant)
      if Rails.env.production?
        send_production_emails(applicant)
      else
        send_development_email(applicant)
      end
    end

    def send_production_emails(applicant)
      AppMailer.send_cep_application_form(applicant).deliver_later
      AppMailer.send_volunteer_application_form(applicant).deliver_later
    end

    def send_development_email(applicant)
      AppMailer.development_env_email(@volunteer_application.user).deliver_later
    end

end
