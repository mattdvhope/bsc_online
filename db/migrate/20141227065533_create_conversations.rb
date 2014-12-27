class CreateConversations < ActiveRecord::Migration
  def change
    create_table :conversations do |t|
      t.integer :lesson_id
      t.string :text_100_thai
      t.string :text_english_50_thai
      t.string :text_english_0_thai
      t.string :audio_english
      t.timestamps
    end
  end
end
