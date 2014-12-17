class AddNameToCurriculums < ActiveRecord::Migration
  def change
    add_column :curriculums, :name, :string
  end
end
