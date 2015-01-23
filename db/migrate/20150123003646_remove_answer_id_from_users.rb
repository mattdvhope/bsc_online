class RemoveAnswerIdFromUsers < ActiveRecord::Migration
  def change
    remove_column :users, :answer_id
  end
end
