class AppMailer < ActionMailer::Base
  default from: "mattagape@me.com"

  def send_welcome_email(user)
    @user = user # '@user' available for email which is /view/app_mailer/send_welcome_email.html.haml
    mail to: user.email, subject: "Welcome to BSC Online!"
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
end
