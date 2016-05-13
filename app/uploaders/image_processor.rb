class ImageProcessor < CarrierWave::Uploader::Base

  # Include RMagick or MiniMagick support:
  # include CarrierWave::RMagick
  include CarrierWave::MiniMagick


  include CarrierWave::MimeTypes
  process :set_content_type

  # Choose what kind of storage to use for this uploader:
  storage :fog

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
    # "uploads/#{model.class.to_s.underscore}/path/#{model.id}"
  end

  # Provide a default URL as a default if there hasn't been a file uploaded:
  def default_url
    "logos/" + [version_name, "default.png"].compact.join('_')
  end

  # Process files fetched from S3 after they are uploaded:

  def make_thumbnail(width, height)
    # uses MiniMagick classes to get a square, centered thumbnail image
    manipulate! do |img|
      if img[:width] < img[:height]
        remove = ((img[:height] - img[:width])/2).round
        img.shave("0x#{remove}")
      elsif img[:width] > img[:height]
        remove = ((img[:width] - img[:height])/2).round
        img.shave("#{remove}x0")
      end

      img.resize("#{width}x#{height}")
      img
    end        
  end


  # Create different versions of your uploaded files:
  # the process statement below isn't defined within a version block on purpose--this means the ORIGINAL uploaded photo is constrained to 1050 pics
  process :resize_to_limit => [1050, 1050]
  process :quality => 85 # this reduces filesize greatly and saves space

  version :thumb do
    process :make_thumbnail => [100, 100]
    process :quality => 85 # this reduces filesize greatly and saves space
  end

  version :big_thumb do
    process :make_thumbnail => [350, 350]
    process :quality => 85 # this reduces filesize greatly and saves space
  end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  def extension_white_list
    %w(jpg jpeg gif png)
  end

  # Override the filename of the uploaded files:
  # Avoid using model.id or version_name here, see uploader/store.rb for details.
  def filename
    if original_filename
      if model && model.read_attribute(:image).present?
        model.read_attribute(:image)
      else
        "#{secure_token}.#{file.extension}"
      end
    end
  end

protected
  def secure_token
    var = :"@#{mounted_as}_secure_token"
    model.instance_variable_get(var) or model.instance_variable_set(var, SecureRandom.uuid)
  end

end

