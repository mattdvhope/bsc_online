class CreateAssessments < ActiveRecord::Migration
  def change
    create_table :assessments do |t|
      t.integer :course_id
      t.integer :part_id
      t.integer :lesson_id
      t.string :type
      t.text :content
      t.string :audio
      t.integer :score
      t.boolean :passed?
      t.timestamps
    end
  end
end
