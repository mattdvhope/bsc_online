class CreateTextHundredThais < ActiveRecord::Migration
  def change
    create_table :text_hundred_thais do |t|
      t.integer :story_id
      t.text :content
      t.string :audio
      t.timestamps
    end
  end
end
