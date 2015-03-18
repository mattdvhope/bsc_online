class CreateGrades < ActiveRecord::Migration
  def change
    create_table :grades do |t|
      t.integer :student_id
      t.integer :assessment_id
      t.integer :score
      t.timestamps
    end
  end
end
