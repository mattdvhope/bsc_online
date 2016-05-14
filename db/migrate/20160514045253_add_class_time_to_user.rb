class AddClassTimeToUser < ActiveRecord::Migration
  def change
    add_column :users, :class_time, :string
  end
end
