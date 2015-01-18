class ChangeCorrectInAnswers < ActiveRecord::Migration
  def change
    remove_column :answers, :correct?, :boolean
    add_column :answers, :correct, :boolean
  end
end
