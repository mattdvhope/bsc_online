class AddEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.integer :month
      t.integer :date
      t.text :notes
      t.timestamps
    end
  end
end
