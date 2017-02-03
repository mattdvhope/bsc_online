class AddOrdersToSkypeTimeSlots < ActiveRecord::Migration
  def change
    add_column :skype_time_slots, :orderday, :integer
    add_column :skype_time_slots, :ordertime, :integer
    add_column :skype_time_slots, :orderam, :integer
  end
end
