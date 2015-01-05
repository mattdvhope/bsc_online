class CreateConversations < ActiveRecord::Migration
  def change
    create_table :conversations do |t|
      t.integer :lesson_id
      t.string  :lesson_language_version
      t.text    :content
      t.string  :audio
      t.timestamps
    end
  end
end
