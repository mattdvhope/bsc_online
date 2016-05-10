class AddFacePhotoToUser < ActiveRecord::Migration
  def change
    add_column :users, :face_photo, :string
  end
end
