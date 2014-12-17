class ChangeUserIdToStudentIdInSyllabuses < ActiveRecord::Migration
  def change
    remove_column :syllabuses, :user_id, :integer
    remove_column :syllabuses, :student, :integer
    add_column :syllabuses, :student_id, :integer
  end
end
