class AddSkypeNameToUser < ActiveRecord::Migration
  def change
    add_column :users, :skype_name, :string
  end
end
