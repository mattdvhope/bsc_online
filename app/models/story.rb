class Story < ActiveRecord::Base

  belongs_to :lesson

  mount_uploader :small_cover, SmallCoverUploader

end
