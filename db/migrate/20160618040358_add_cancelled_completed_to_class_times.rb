class AddCancelledCompletedToClassTimes < ActiveRecord::Migration
  def change
    add_column :class_times, :completed, :boolean, default: false
    add_column :class_times, :cancelled, :boolean, default: false
  end
end
