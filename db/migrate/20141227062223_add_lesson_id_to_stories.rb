class AddLessonIdToStories < ActiveRecord::Migration
  def change
    add_column :stories, :lesson_id, :integer
  end
end
