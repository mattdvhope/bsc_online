class AddFacebookAndLineToUsers < ActiveRecord::Migration
  def change
    add_column :users, :facebook, :string
    add_column :users, :line, :string
    remove_column :users, :uid_facebook
    remove_column :users, :need_skype
  end
end
