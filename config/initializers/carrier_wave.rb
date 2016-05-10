# in AWS, go to IAM > Users > Permissions > Attach Policy > [scroll way down to...] AmazonS3FullAccess

CarrierWave.configure do |config|
  if Rails.env.staging? || Rails.env.production?
    config.fog_credentials = {
      :provider               => 'AWS',
      :aws_access_key_id      => ENV['S3_KEY'],
      :aws_secret_access_key  => ENV['S3_SECRET'],
      :region                 => ENV['S3_REGION']
    }
    config.fog_directory  = ENV['S3_BUCKET']
  else
    config.storage = :file
    config.enable_processing = Rails.env.development? # If we're only running tests, we'll not use mini_magick to process the images.
  end
end



# CarrierWave.configure do |config|

#   if Rails.env.staging?
#     config.storage    = :aws
#     config.aws_bucket = ENV['S3_BUCKET']
#     config.aws_acl    = :public_read
#     config.asset_host = 'http://enigmatic-castle-3874-staging.herokuapp.com/'
#     config.aws_authenticated_url_expiration = 60 * 60 * 24 * 365

#     config.aws_credentials = {
#       access_key_id:     ENV['S3_KEY'],
#       secret_access_key: ENV['S3_SECRET']
#     }
#   elsif Rails.env.production?
#     config.storage    = :aws
#     config.aws_bucket = ENV['S3_BUCKET']
#     config.aws_acl    = :public_read
#     config.asset_host = 'http://enigmatic-castle-3874.herokuapp.com/'
#     config.aws_authenticated_url_expiration = 60 * 60 * 24 * 365

#     config.aws_credentials = {
#       access_key_id:     ENV['S3_KEY'],
#       secret_access_key: ENV['S3_SECRET']
#     }
#   else
#     config.storage = :file
#     config.enable_processing = Rails.env.development? # If we're only running tests, we'll not use mini_magick to process the images.
#   end
  
# end