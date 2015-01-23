class AddChosingToStudentAnswers < ActiveRecord::Migration
  def change
    add_column :student_answers, :choosing, :boolean, default: false
  end
end
