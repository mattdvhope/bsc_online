class AddRoleIdToUser < ActiveRecord::Migration
  def change
    remove_column :users, :role
    add_column :users, :role_id, :integer
  end
end
