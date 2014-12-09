class AddActivatedToCourses < ActiveRecord::Migration
  def change
    add_column :courses, :activated, :boolean
  end
end
