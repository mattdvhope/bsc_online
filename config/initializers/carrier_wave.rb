CarrierWave.configure do |config|

  if Rails.env.staging? || Rails.env.production?
    config.storage    = :aws
    config.aws_bucket = ENV.fetch('S3_BUCKET_NAME')
    config.aws_acl    = :public_read
    config.asset_host = 'http://enigmatic-castle-3874.herokuapp.com/'
    config.aws_authenticated_url_expiration = 60 * 60 * 24 * 365

    config.aws_credentials = {
      access_key_id:     ENV.fetch('AWS_ACCESS_KEY_ID'),
      secret_access_key: ENV.fetch('AWS_SECRET_ACCESS_KEY')
    }
  else
    config.storage = :file
    config.enable_processing = Rails.env.development? # If we're only running tests, we'll not use mini_magick to process the images.
  end
  
end