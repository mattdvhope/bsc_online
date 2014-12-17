class CreateSyllabuses < ActiveRecord::Migration
  def change
    create_table :syllabuses do |t|
      t.integer :curriculum_id
      t.integer :user_id
      t.timestamps
    end
  end
end
