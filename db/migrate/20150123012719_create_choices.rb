class CreateChoices < ActiveRecord::Migration
  def change
    create_table :choices do |t|
      t.boolean :selected
      t.references :selectable, polymorphic: true, index: true
      t.timestamps null: false
    end
  end
end
