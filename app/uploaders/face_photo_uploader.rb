class FacePhotoUploader < CarrierWave::Uploader::Base

  include CarrierWave::MiniMagick

  process :resize_to_fill => [156, 200] #The '#enable_processing' method in 'carrier_wave.rb' allows for the usage of this 'process' (for production? too??)

  storage :fog

  def cache_dir
    "#{Rails.root}/tmp/uploads"
  end

  def extension_white_list
    %w(jpg jpeg gif png)
  end

end
