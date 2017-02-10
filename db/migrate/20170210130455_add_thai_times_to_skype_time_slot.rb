class AddThaiTimesToSkypeTimeSlot < ActiveRecord::Migration
  def change
    add_column :skype_time_slots, :day_thai, :string
    add_column :skype_time_slots, :time_thai, :string
  end
end
