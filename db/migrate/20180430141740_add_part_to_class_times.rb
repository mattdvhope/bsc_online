class AddPartToClassTimes < ActiveRecord::Migration[5.1]
  def change
    add_column :class_times, :part, :string
  end
end
