class RemoveStudentIdFromAnswers < ActiveRecord::Migration
  def change
    remove_column :answers, :student_id
  end
end
