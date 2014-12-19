class ChangeUserToStudentInPlans < ActiveRecord::Migration
  def change
    remove_column :plans, :user_id, :integer
    add_column :plans, :student_id, :integer
  end
end
