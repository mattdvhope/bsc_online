class CreateClassTimeTwos < ActiveRecord::Migration[5.1]
  def change
    create_table :class_time_twos do |t|
      t.string :period
      t.string :period_thai
      t.string :category
      t.integer :order_no
      t.boolean :completed, :default => false
      t.boolean :cancelled, :default => false

      t.timestamps
    end
  end
end
