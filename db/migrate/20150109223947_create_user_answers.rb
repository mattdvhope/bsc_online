class CreateUserAnswers < ActiveRecord::Migration
  def change
    create_table :user_answers do |t|
      t.integer :student_id
      t.integer :answer_id
      t.timestamps
    end
  end
end
