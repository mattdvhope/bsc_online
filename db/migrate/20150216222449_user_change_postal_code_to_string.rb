class UserChangePostalCodeToString < ActiveRecord::Migration
  def change
    change_column :users, :postal_code, :string
  end
end
