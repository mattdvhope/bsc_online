OmniAuth.config.logger = Rails.logger

if Rails.env.production?
  fb_app_id = "518969934944042"
  fb_app_secret = "bf90ca4c90dfab2d6bfc50ce563bca0e"
else
  fb_app_id = "518971841610518"
  fb_app_secret = "f19fca5cdb4779493d7ec5975aa5462c"
end


Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, fb_app_id, fb_app_secret,
           :scope => 'email',
           :display => 'popup',
           :info_fields => "first_name,last_name,about,age_range,context,cover,currency,devices,email,gender,link,locale,location,meeting_for,payment_pricepoints,quotes,security_settings,timezone,updated_time",
           :image_size => "normal"
end