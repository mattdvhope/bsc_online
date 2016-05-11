# in AWS, go to IAM > Users > Permissions > Attach Policy > [scroll way down to...] AmazonS3FullAccess

# CarrierWave.configure do |config|
#   config.fog_credentials = {
#     :provider               => 'AWS',
#     :aws_access_key_id      => ENV['S3_KEY'],
#     :aws_secret_access_key  => ENV['S3_SECRET'],
#     :region                 => ENV['S3_REGION']
#   }
#   config.fog_directory  = ENV['S3_BUCKET']
#   config.cache_dir = "#{Rails.root}/tmp/uploads"
# end

CarrierWave.configure do |config|
  config.storage    = :aws
  config.aws_bucket = ENV.fetch('S3_BUCKET')
  config.aws_acl    = 'public-read'

  # The maximum period for authenticated_urls is only 7 days.
  config.aws_authenticated_url_expiration = 60 * 60 * 24 * 7

  # Set custom options such as cache control to leverage browser caching
  config.aws_attributes = {
    expires: 1.week.from_now.httpdate,
    cache_control: 'max-age=604800'
  }

  config.aws_credentials = {
    access_key_id:     ENV.fetch('S3_KEY'),
    secret_access_key: ENV.fetch('S3_SECRET'),
    region:            ENV.fetch('S3_REGION') # Required
  }

  config.cache_dir = "#{Rails.root}/tmp/uploads"

  # Optional: Signing of download urls, e.g. for serving private content through CloudFront.
  # config.aws_signer = -> (unsigned_url, options) { Aws::CF::Signer.sign_url unsigned_url, options }
end