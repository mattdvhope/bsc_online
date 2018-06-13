class AddClassDutyToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :class_duty_id, :integer
    add_column :users, :class_duty_type, :string
  end
end
