class SkypeTimeSlotsChangeUsers < ActiveRecord::Migration
  def change
    remove_column :skype_time_slots, :user_id
    add_column :skype_time_slots, :volunteer_id, :integer
    add_column :skype_time_slots, :student_id, :integer
  end
end
