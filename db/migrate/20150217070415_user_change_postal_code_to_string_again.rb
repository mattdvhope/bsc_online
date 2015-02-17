class UserChangePostalCodeToStringAgain < ActiveRecord::Migration
  def change
    remove_column :users, :postal_code
    add_column :users, :postal_code, :string
  end
end
