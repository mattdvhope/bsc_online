class AddDateFormatAndRemoveSomeFieldsWithUser < ActiveRecord::Migration
  def change
    remove_column :users, :occupation
    remove_column :users, :university_name
    remove_column :users, :religion
    add_column :users, :date_format, :string
  end
end
