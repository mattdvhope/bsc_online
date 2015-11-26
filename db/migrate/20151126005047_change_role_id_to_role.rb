class ChangeRoleIdToRole < ActiveRecord::Migration
  def change
    remove_column :users, :role_id
    add_column :users, :role, :string, :default => "student"
  end
end
