class DropVolunteerApplications < ActiveRecord::Migration
  def change
    drop_table :volunteer_applications
  end
end
