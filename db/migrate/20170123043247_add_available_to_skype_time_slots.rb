class AddAvailableToSkypeTimeSlots < ActiveRecord::Migration
  def change
    add_column :skype_time_slots, :available, :boolean
  end
end
