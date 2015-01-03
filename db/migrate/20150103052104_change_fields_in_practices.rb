class ChangeFieldsInPractices < ActiveRecord::Migration
  def change
    remove_column :practices, :sentences
    remove_column :practices, :audio_sentences
    remove_column :practices, :phrases
    remove_column :practices, :audio_phrases
    remove_column :practices, :vocabulary
    remove_column :practices, :audio_vocab
    add_column :practices, :name, :string
  end
end
