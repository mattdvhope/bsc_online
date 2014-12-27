class CreateLessons < ActiveRecord::Migration
  def change
    create_table :lessons do |t|
      t.integer :part_id
      t.string :name
      t.string :description 
      t.timestamps
    end
  end
end
