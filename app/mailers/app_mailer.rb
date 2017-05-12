class AppMailer < ActionMailer::Base

  def development_env_email(user)
    @user = user
    mail from: "City English Project <" + ENV["username"] + ">", to: user.email, subject: "Welcome to the [Development] City English Project (CEP)!"
  end

  def admin_applicant(user)
    @user = user
    @user.admin_application = AdminApplication.new
    @user.save
    mg_client = Mailgun::Client.new ENV["api_key"]
    message_params = {
      :from    => "City English Project <" + ENV["username"] + ">",
      :to      => @user.email,
      :subject => "Hi #{@user.first_name}, thanks for your interest in CEP!",
      :html => (render_to_string(template: "../views/app_mailer/admin_applicant")).to_str
    }
    mg_client.send_message ENV["domain"], message_params
  end

  def student_welcome(user)
    @user = user
    mg_client = Mailgun::Client.new ENV["api_key"]
    message_params = {
      # :from    => "City English Project <" + ENV["username"] + ">",
      :from    => "City English Project <" + ENV["username"] + ">",
      :to      => @user.email,
      :subject => "Welcome to CEP, #{@user.first_name}!",
      :html => (render_to_string(template: "../views/app_mailer/student_welcome")).to_str
    }
    mg_client.send_message ENV["domain"], message_params
  end

  def volunteer_welcome(user)
    @user = user
    mg_client = Mailgun::Client.new ENV["api_key"]
    message_params = {
      # :from    => "City English Project <" + ENV["username"] + ">",
      :from    => "City English Project <" + ENV["username"] + ">",
      :to      => @user.email,
      :subject => "Glad to have you as a CEP volunteer, #{@user.first_name}!",
      :html => (render_to_string(template: "../views/app_mailer/volunteer_welcome")).to_str
    }
    mg_client.send_message ENV["domain"], message_params
  end

  def volunteer_for_student(volunteer, student)
    @volunteer = volunteer
    @student = student
    @skype_time_slots = @volunteer.skype_time_slots.where(student_id: @student.id)
    mg_client = Mailgun::Client.new ENV["api_key"]
    message_params = {
      :from    => "City English Project <" + ENV["username"] + ">",
      :to      => @volunteer.email,
      :subject => "A Thai student wants to Skype with you, #{@volunteer.first_name}!",
      :html => (render_to_string(template: "../views/app_mailer/volunteer_for_student")).to_str
    }
    mg_client.send_message ENV["domain"], message_params
  end

  def volunteer_for_student_to_student(volunteer, student)
    @volunteer = volunteer
    @student = student
    @skype_time_slots = @volunteer.skype_time_slots.where(student_id: @student.id)
    mg_client = Mailgun::Client.new ENV["api_key"]
    message_params = {
      :from    => "City English Project <" + ENV["username"] + ">",
      :to      => @student.email,
      :subject => "ยินดีต้อนรับ คุณ #{@student.first_name} สู่การสนทนาภาษาอังกฤษออนไลน์!",
      :html => (render_to_string(template: "../views/app_mailer/volunteer_for_student_to_student")).to_str
    }
    mg_client.send_message ENV["domain"], message_params
  end

  def send_admin_application_form(applicant)
    @applicant = applicant
    mg_client = Mailgun::Client.new ENV["api_key"]
    message_params = {
      :from    => "City English Project <" + ENV["username"] + ">",
      :to      => @applicant.email,
      :subject => "Copy of CEP Volunteer Administrator Application for #{applicant.first_name} #{applicant.last_name}",
      :html => (render_to_string(template: "../views/app_mailer/send_admin_application_form")).to_str
    }
    mg_client.send_message ENV["domain"], message_params
  end

  def send_cep_application_form(applicant)
    @applicant = applicant
    mg_client = Mailgun::Client.new ENV["api_key"]
    message_params = {
      :from    => "City English Project <" + ENV["username"] + ">",
      :to      => ENV["username"],
      :subject => "CEP Volunteer Administrator Questionnaire from #{applicant.first_name} #{applicant.last_name}",
      :html => (render_to_string(template: "../views/app_mailer/send_cep_application_form")).to_str
    }
    mg_client.send_message ENV["domain"], message_params
  end

  def send_admin_application_approval(applicant)
    @applicant = applicant
    mg_client = Mailgun::Client.new ENV["api_key"]
    message_params = {
      :from    => "City English Project <" + ENV["username"] + ">",
      :to      => @applicant.email,
      :subject => "Congratulations #{applicant.first_name}! You are approved as a CEP Volunteer Administrator!",
      :html => (render_to_string(template: "../views/app_mailer/send_admin_application_approval")).to_str
    }
    mg_client.send_message ENV["domain"], message_params
  end

  def student_to_volunteer(volunteer, student)
    @volunteer = volunteer
    @student = student
    mg_client = Mailgun::Client.new ENV["api_key"]
    message_params = {
      :from    => "City English Project <" + ENV["username"] + ">",
      :to      => volunteer.email,
      :subject => "Hi #{volunteer.first_name}, #{student.first_name} wants a Skype partnership!",
      :html => (render_to_string(template: "../views/app_mailer/student_to_volunteer")).to_str
    }
    mg_client.send_message ENV["domain"], message_params
  end

  def from_business_to_cep(business)
    @business = business
    mg_client = Mailgun::Client.new ENV["api_key"]
    message_params = {
      :from    => "City English Project <" + ENV["username"] + ">",
      :to      => ENV["username"],
      :subject => "\"#{business.business_name}\" wants CEP to contact them!",
      :html => (render_to_string(template: "../views/app_mailer/from_business_to_cep")).to_str
    }
    mg_client.send_message ENV["domain"], message_params
  end

end
