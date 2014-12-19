class DropSyllabuses < ActiveRecord::Migration
  def change
    drop_table :syllabuses
  end
end
