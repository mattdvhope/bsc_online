class AddOverseerToRoles < ActiveRecord::Migration
  def change
    remove_column :roles, :user_id
    add_column :roles, :overseer_id, :integer
  end
end
