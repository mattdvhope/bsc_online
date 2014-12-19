class CreatePlans < ActiveRecord::Migration
  def change
    create_table :plans do |t|
      t.integer :curriculum_id
      t.integer :user_id
      t.string :description
      t.timestamps
    end
  end
end
