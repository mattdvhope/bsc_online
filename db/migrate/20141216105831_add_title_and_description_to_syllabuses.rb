class AddTitleAndDescriptionToSyllabuses < ActiveRecord::Migration
  def change
    add_column :syllabuses, :title, :string
    add_column :syllabuses, :description, :string
  end
end
