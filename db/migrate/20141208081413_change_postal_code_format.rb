class ChangePostalCodeFormat < ActiveRecord::Migration
  def change
    change_column :users, :postal_code, :integer
  end
end
