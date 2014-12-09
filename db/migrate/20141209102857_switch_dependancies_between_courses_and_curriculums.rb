class SwitchDependanciesBetweenCoursesAndCurriculums < ActiveRecord::Migration
  def change
    add_column :courses, :curriculum_id, :integer
    remove_column :curriculums, :course_id, :integer
  end
end
