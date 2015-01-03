class CreateConversationEnglishZeroThais < ActiveRecord::Migration
  def change
    create_table :conversation_english_zero_thais do |t|
      t.integer :conversation_id
      t.text :content
      t.string :audio
      t.timestamps
    end
  end
end
