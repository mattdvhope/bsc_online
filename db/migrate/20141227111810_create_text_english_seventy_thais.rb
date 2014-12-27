class CreateTextEnglishSeventyThais < ActiveRecord::Migration
  def change
    create_table :text_english_seventy_thais do |t|
      t.integer :story_id
      t.text :content
      t.string :audio
      t.timestamps
    end
  end
end
