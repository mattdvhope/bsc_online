class ChangeTypeInPractices < ActiveRecord::Migration
  def change
    remove_column :practices, :type
    add_column :practices, :type_of, :string
  end
end
