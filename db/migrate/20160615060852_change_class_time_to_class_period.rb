class ChangeClassTimeToClassPeriod < ActiveRecord::Migration
  def change
    add_column :users, :class_period, :string
    remove_column :users, :class_time
  end
end
