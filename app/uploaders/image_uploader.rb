class ImageUploader < CarrierWave::Uploader::Base
  include CarrierWaveDirect::Uploader

  include ActiveModel::Conversion
  extend ActiveModel::Naming

  include CarrierWave::MimeTypes
  process :set_content_type

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  def extension_white_list
    %w(jpg jpeg gif png)
  end

  # Include the Sprockets helpers for Rails 3.1+ asset pipeline compatibility:
  include Sprockets::Helpers::RailsHelper
  include Sprockets::Helpers::IsolatedHelper

  # Override the directory where uploaded files will be stored.
  # CarrierWaveDirect::Uploader puts raw uploaded files in this directory on S3 as a first step
  def store_dir
    "unprocessed_uploads"
  end
end