class AppMailer < ActionMailer::Base

  def development_env_email(user)
    @user = user
    mail from: ENV["username"], to: user.email, subject: "Welcome to the [Development] City English Project (CEP)!"
  end

  def volunteer_applicant(user)
    @user = user
    @user.volunteer_application = VolunteerApplication.new
    @user.save
    mg_client = Mailgun::Client.new ENV["api_key"]
    message_params = {
      :from    => ENV["username"],
      :to      => @user.email,
      :subject => "Welcome to CEP, #{@user.name}!",
      :html => (render_to_string(template: "../views/app_mailer/volunteer_applicant")).to_str
    }
    mg_client.send_message ENV["domain"], message_params
  end

  def student_welcome(user)
    @user = user
    mg_client = Mailgun::Client.new ENV["api_key"]
    message_params = {
      :from    => ENV["username"],
      :to      => @user.email,
      :subject => "Welcome to CEP, #{@user.name}!",
      :html => (render_to_string(template: "../views/app_mailer/student_welcome")).to_str
    }
    mg_client.send_message ENV["domain"], message_params
  end

  def send_volunteer_application_form(applicant)
    @applicant = applicant
    mg_client = Mailgun::Client.new ENV["api_key"]
    message_params = {
      :from    => ENV["username"],
      :to      => @applicant.email,
      :subject => "Copy of CEP Volunteer Application for #{applicant.name} #{applicant.last_name}",
      :html => (render_to_string(template: "../views/app_mailer/send_volunteer_application_form")).to_str
    }
    mg_client.send_message ENV["domain"], message_params
  end

  def send_cep_application_form(applicant)
    @applicant = applicant
    mg_client = Mailgun::Client.new ENV["api_key"]
    message_params = {
      :from    => ENV["username"],
      :to      => ENV["other_username"],
      :subject => "CEP Volunteer Application from #{applicant.name} #{applicant.last_name}",
      :html => (render_to_string(template: "../views/app_mailer/send_cep_application_form")).to_str
    }
    mg_client.send_message ENV["domain"], message_params
  end

end
