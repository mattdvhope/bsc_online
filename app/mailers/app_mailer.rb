class AppMailer < ActionMailer::Base
  default from: "mattagape@me.com"

  def send_welcome_email(user)
    @user = user # '@user' available for email which is /view/app_mailer/send_welcome_email.html.haml
    mail to: user.email, subject: "Welcome to the City English Project (CEP)!"
  end

  def sample_email(user)
    @user = user
    mg_client = Mailgun::Client.new ENV["api_key"]
    message_params = {:from    => ENV["username"],
                      :to      => @user.email,
                      :subject => 'Welcome to CEP!',
                      :text    => 'We hope you enjoy being a part of CEP!'}
    mg_client.send_message ENV["domain"], message_params
  end

end
