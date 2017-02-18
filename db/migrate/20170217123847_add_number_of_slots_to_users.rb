class AddNumberOfSlotsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :number_of_slots, :integer
  end
end
