class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :password_digest
      t.string :address_1
      t.string :address_2
      t.string :city
      t.string :sub_district
      t.string :district
      t.string :province
      t.string :postal_code
      t.string :country
      t.string :phone_number
      t.integer :age
      t.string :gender
      t.string :occupation
      t.string :university_name
      t.string :religion # should be radio button or selector
      t.boolean :studied_english_before?
      t.integer :studied_english_how_long
      t.boolean :interested_in_follow_up?
      t.timestamps
    end
  end
end
