class SetDefaultUsersNumberOfSlots < ActiveRecord::Migration
  def change
    change_column_default :users, :number_of_slots, 0
  end
end
