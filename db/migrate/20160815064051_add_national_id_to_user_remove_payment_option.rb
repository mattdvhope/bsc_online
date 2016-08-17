class AddNationalIdToUserRemovePaymentOption < ActiveRecord::Migration
  def change
    remove_column :users, :payment_option
    add_column :users, :national_id, :string
  end
end
