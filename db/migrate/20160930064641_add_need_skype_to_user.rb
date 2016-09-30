class AddNeedSkypeToUser < ActiveRecord::Migration
  def change
    add_column :users, :need_skype, :boolean
  end
end
