class AddDateStampToSkypeTimeSlots < ActiveRecord::Migration[5.0]
  def change
    add_column :skype_time_slots, :date_chosen, :integer
    add_column :skype_time_slots, :month_chosen, :integer
    add_column :skype_time_slots, :year_chosen, :integer
  end
end
