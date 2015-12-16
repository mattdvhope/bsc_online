class CreateAdminApplications < ActiveRecord::Migration
  def change
    create_table :admin_applications do |t|
      t.integer :user_id
      t.text :response_first
      t.text :response_second
      t.text :response_third
      t.timestamps null: false
    end
  end
end
