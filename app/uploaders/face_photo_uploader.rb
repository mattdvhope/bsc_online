class FacePhotoUploader < CarrierWave::Uploader::Base

  include CarrierWaveDirect::Uploader

  include CarrierWave::MiniMagick

  process :resize_to_fill => [156, 200] #The '#enable_processing' method in 'carrier_wave.rb' allows for the usage of this 'process' (for production? too??)

  # def cache_dir
  #   "#{Rails .root}/tmp/uploads"
  # end

  # def extension_white_list
  #   %w(jpg jpeg gif png)
  # end

  def will_include_content_type
    true
  end

  default_content_type  'image/png'
  allowed_content_types %w(image/jpeg image/jpg image/gif)

end
