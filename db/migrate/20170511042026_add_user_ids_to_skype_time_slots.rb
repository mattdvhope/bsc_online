class AddUserIdsToSkypeTimeSlots < ActiveRecord::Migration[5.0]
  def change
    add_column :skype_time_slots, :volunteer_id, :integer
    add_column :skype_time_slots, :student_id, :integer
  end
end
