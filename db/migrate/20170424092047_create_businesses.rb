class CreateBusinesses < ActiveRecord::Migration[5.0]
  def change
    create_table :businesses do |t|
      t.string :business_name
      t.string :business_address
      t.string :leader_name
      t.integer :employees_no
      t.string :times
      t.string :days
    end
  end
end
