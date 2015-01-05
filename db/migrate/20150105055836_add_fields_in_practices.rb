class AddFieldsInPractices < ActiveRecord::Migration
  def change
    remove_column :practices, :name
    add_column :practices, :type, :string
    add_column :practices, :content, :text
    add_column :practices, :audio, :string
  end
end
