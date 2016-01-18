OmniAuth.config.logger = Rails.logger

if Rails.env.production?
  fb_app_id = ENV['fb_app_id_production']
  fb_app_secret = ENV['fb_app_secret_production']
else
  fb_app_id = ENV['fb_app_id_development']
  fb_app_secret = ENV['fb_app_secret_development']
end


Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, fb_app_id, fb_app_secret,
           :scope => 'email',
           :display => 'popup',
           :info_fields => "first_name,last_name,about,age_range,context,cover,currency,devices,email,gender,link,locale,location,meeting_for,payment_pricepoints,quotes,security_settings,timezone,updated_time",
           :image_size => "normal"
end