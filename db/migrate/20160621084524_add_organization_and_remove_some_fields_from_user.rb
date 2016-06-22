class AddOrganizationAndRemoveSomeFieldsFromUser < ActiveRecord::Migration
  def change
    remove_column :users, :studied_english_before?
    remove_column :users, :studied_english_how_long
    remove_column :users, :interested_in_follow_up?
    add_column :users, :organization, :string
  end
end
