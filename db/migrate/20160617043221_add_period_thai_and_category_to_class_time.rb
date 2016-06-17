class AddPeriodThaiAndCategoryToClassTime < ActiveRecord::Migration
  def change
    add_column :class_times, :period_thai, :string
    add_column :class_times, :category, :string
  end
end
