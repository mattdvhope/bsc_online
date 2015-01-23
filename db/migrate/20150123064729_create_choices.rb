class CreateChoices < ActiveRecord::Migration
  def change
    create_table :choices do |t|
      t.integer :answer_id
      t.integer :student_id
      t.boolean :selected
      t.timestamps
    end
  end
end
