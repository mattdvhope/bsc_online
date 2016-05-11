class ChangeFacePhotoToImage < ActiveRecord::Migration
  def change
    remove_column :users, :face_photo
    add_column :users, :image, :string
  end
end
