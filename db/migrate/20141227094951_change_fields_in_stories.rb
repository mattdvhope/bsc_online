class ChangeFieldsInStories < ActiveRecord::Migration
  def change
    remove_column :stories, :text_100_thai, :string
    remove_column :stories, :text_english_70_thai, :string
    remove_column :stories, :text_english_50_thai, :string
    remove_column :stories, :text_english_20_thai, :string
    remove_column :stories, :text_english_0_thai, :string
    remove_column :stories, :audio_english, :string
    add_column :stories, :name, :string
  end
end
