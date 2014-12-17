class RemoveCurriculumIdFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :curriculum_id, :integer
  end
end
