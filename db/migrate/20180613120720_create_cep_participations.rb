class CreateCepParticipations < ActiveRecord::Migration[5.1]
  def change
    create_table :cep_participations do |t|
      t.integer :user_id
      t.integer :class_time_id

      t.timestamps
    end
  end
end
