class CreatePractices < ActiveRecord::Migration
  def change
    create_table :practices do |t|
      t.integer :lesson_id
      t.string :sentences
      t.string :audio_sentences
      t.string :phrases
      t.string :audio_phrases
      t.string :vocabulary
      t.string :audio_vocab
      t.timestamps
    end
  end
end
