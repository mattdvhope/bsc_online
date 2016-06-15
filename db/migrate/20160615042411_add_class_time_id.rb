class AddClassTimeId < ActiveRecord::Migration
  def change
    add_column :users, :class_time_id, :integer
  end
end
