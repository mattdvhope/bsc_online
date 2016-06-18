class AddOrderNoToClassTimes < ActiveRecord::Migration
  def change
    add_column :class_times, :order_no, :integer
  end
end
