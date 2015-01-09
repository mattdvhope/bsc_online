class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.integer :assessment_id
      t.text :question_content
      t.integer :correct_answer_id
      t.timestamps
    end
  end
end
