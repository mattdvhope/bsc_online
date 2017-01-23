class ChangeSkypeTimeSlots < ActiveRecord::Migration
  def change
    change_column :skype_time_slots, :available, :boolean, default: true
  end
end
