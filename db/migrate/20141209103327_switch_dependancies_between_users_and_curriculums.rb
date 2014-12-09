class SwitchDependanciesBetweenUsersAndCurriculums < ActiveRecord::Migration
  def change
    add_column :users, :curriculum_id, :integer
    remove_column :curriculums, :user_id, :integer
  end
end
