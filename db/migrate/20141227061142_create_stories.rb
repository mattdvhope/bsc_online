class CreateStories < ActiveRecord::Migration
  def change
    create_table :stories do |t|
      t.string :text_100_thai
      t.string :text_english_70_thai
      t.string :text_english_50_thai
      t.string :text_english_20_thai
      t.string :text_english_0_thai
      t.string :audio_english
      t.timestamps
    end
  end
end
