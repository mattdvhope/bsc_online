class CreateSkypeTimeSlots < ActiveRecord::Migration
  def change
    create_table :skype_time_slots do |t|
      t.integer :user_id
      t.text :day
      t.text :time_period
      t.text :am_pm
      t.timestamps null: false
    end
  end
end
