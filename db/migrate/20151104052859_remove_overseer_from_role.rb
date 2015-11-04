class RemoveOverseerFromRole < ActiveRecord::Migration
  def change
    remove_column :roles, :overseer_id
  end
end
