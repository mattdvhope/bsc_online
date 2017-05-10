class AddLineIdToBusinesses < ActiveRecord::Migration[5.0]
  def change
    add_column :businesses, :line_id, :string
  end
end
