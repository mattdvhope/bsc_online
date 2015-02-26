class Story < ActiveRecord::Base

  belongs_to :lesson

  # mount_uploader :audio, CarouselUploader

end
