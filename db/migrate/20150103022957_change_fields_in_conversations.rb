class ChangeFieldsInConversations < ActiveRecord::Migration
  def change
    remove_column :conversations, :text_100_thai, :string
    remove_column :conversations, :text_english_50_thai, :string
    remove_column :conversations, :text_english_0_thai, :string
    remove_column :conversations, :audio_english, :string
    add_column :conversations, :name, :string
  end
end
