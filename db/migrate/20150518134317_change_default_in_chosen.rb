class ChangeDefaultInChosen < ActiveRecord::Migration
  def change
    change_column :answers, :chosen, :boolean, default: false
  end
end
