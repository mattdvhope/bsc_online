class AppMailer < ActionMailer::Base
  default from: "mattagape@me.com"

  def send_welcome_email(user)
    @user = user # '@user' available for email which is /view/app_mailer/send_welcome_email.html.haml
    mail to: user.email, subject: "Welcome to the City English Project (CEP)!"
  end

  # def send_forgot_password(user)
  #   @user = user
  #   mail to: user.email, subject: "Please reset your password."
  # end

  # def send_invitation_email(invitation)
  #   @invitation = invitation
  #   mail to: invitation.recipient_email, subject: "Invitation to join MyFlix"
  # end

  # def send_card_problem_email(user)
  #   @user = user
  #   mail to: user.email, subject: "Your MyFlix account has been suspended."
  # end

  def sample_email(user)
    @user = user
    mg_client = Mailgun::Client.new ENV['api_key']
    message_params = {:from    => ENV['username'],
                      :to      => @user.email,
                      :subject => 'Sample Mail using Mailgun API',
                      :text    => 'This mail is sent using Mailgun API via mailgun-ruby'}
    mg_client.send_message ENV['domain'], message_params
  end


end
