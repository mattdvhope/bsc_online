class AddUidFacebookToUsers < ActiveRecord::Migration
  def change
    add_column :users, :uid_facebook, :string
  end
end
