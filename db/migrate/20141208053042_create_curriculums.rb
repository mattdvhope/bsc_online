class CreateCurriculums < ActiveRecord::Migration
  def change
    create_table :curriculums do |t|
      t.integer :user_id
      t.integer :course_id
      t.timestamps
    end
  end
end
