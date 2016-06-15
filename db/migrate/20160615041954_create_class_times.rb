class CreateClassTimes < ActiveRecord::Migration
  def change
    create_table :class_times do |t|
      t.string :period
      t.timestamps null: false
    end
  end
end
