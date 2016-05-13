class Photo < ActiveRecord::Base

  mount_uploader :image, ImageProcessor

  def save_and_process_image(options = {})
    s3_unprocessed_image_url = self.image.asset_host + '/' + self.key
      # this next line downloads the image from S3
      # and this save line below will process the image and reupload to S3 according to ImageProcessor settings
      self.remote_image_url = s3_unprocessed_image_url
      save
  end

end
