class CreateParts < ActiveRecord::Migration
  def change
    create_table :parts do |t|
      t.integer :course_id
      t.boolean :completed?
      t.timestamps
    end
  end
end
