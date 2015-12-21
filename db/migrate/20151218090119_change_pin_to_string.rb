class ChangePinToString < ActiveRecord::Migration
  def change
    remove_column :users, :pin
    add_column :users, :pin, :string, :default => "000000"
  end
end
