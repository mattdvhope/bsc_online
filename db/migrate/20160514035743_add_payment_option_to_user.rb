class AddPaymentOptionToUser < ActiveRecord::Migration
  def change
    add_column :users, :payment_option, :string
  end
end
