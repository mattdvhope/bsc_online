class AddFieldsInStories < ActiveRecord::Migration
  def change
    remove_column :stories, :name
    add_column :stories, :lesson_language_version, :string
    add_column :stories, :content, :text
    add_column :stories, :audio, :string
  end
end
