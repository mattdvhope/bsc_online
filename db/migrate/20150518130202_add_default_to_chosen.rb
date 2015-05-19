class AddDefaultToChosen < ActiveRecord::Migration
  def change
    change_column :answers, :chosen, :boolean, default: true
  end
end
