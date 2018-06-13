class RemoveClassDutyFromUser < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :class_duty_id
    remove_column :users, :class_duty_type
  end
end
