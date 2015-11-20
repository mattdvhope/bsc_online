class AppMailer < ActionMailer::Base

  def send_welcome_email(user)
    @user = user
    mail from: "mattagape@me.com", to: user.email, subject: "Welcome to the [Development] City English Project (CEP)!"
  end

  def sample_email(user)
    @user = user
    mg_client = Mailgun::Client.new ENV["api_key"]
    message_params = {
      :from    => ENV["username"],
      :to      => @user.email,
      :subject => "Welcome to CEP, #{@user.name}!",
      :html => (render_to_string(template: "../views/app_mailer/sample_email")).to_str
    }
    mg_client.send_message ENV["domain"], message_params
  end

end
