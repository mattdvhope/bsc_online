class CreatePracticeVocabularies < ActiveRecord::Migration
  def change
    create_table :practice_vocabularies do |t|
      t.integer :practice_id
      t.text :content
      t.string :audio
      t.timestamps
    end
  end
end
