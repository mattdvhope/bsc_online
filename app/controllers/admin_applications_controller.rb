class AdminApplicationsController < ApplicationController

  def edit
    @admin_application = AdminApplication.find(params[:id])
  end

  def update
    @admin_application = AdminApplication.find(params[:id])
    if @admin_application.update(admin_application_params)
      user = @admin_application.user
      user.update_attribute(:pin, user.generate_pin)
      user.save!(:validate => false)
      flash[:success] = "Thank you for sending in this CEP Volunteer Administrator Questionnaire!"
      send_application_emails(@admin_application.user)
      redirect_to root_path
    else
      flash[:danger] = "Your Application did not go through."
      redirect_to :back
    end
  end

  def email_admin_application_approval
    admin_application = AdminApplication.find(params[:id])
    admin_application.update_attribute(:approved, true)
    applicant = admin_application.user

    if Rails.env.production?
      AppMailer.send_admin_application_approval(applicant).deliver_later
    else
      send_development_email(applicant)
    end

    redirect_to :back
  end

  private

    def admin_application_params
      params.require(:admin_application).permit(:response_first, :response_second, :response_third, :approved)
    end

    def send_application_emails(applicant)
      if Rails.env.production?
        send_production_email(applicant)
      else
        send_development_email(applicant)
      end
    end

    def send_production_email(applicant)
      AppMailer.send_cep_application_form(applicant).deliver_later
      AppMailer.send_admin_application_form(applicant).deliver_later
    end

    def send_development_email(applicant)
      AppMailer.development_env_email(applicant).deliver_later
    end

end
