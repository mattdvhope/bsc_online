class ChangeTypeToTypeOfInAssessments < ActiveRecord::Migration
  def change
    remove_column :assessments, :type
    add_column :assessments, :type_of, :string
  end
end
