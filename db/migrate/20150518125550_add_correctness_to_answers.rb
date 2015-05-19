class AddCorrectnessToAnswers < ActiveRecord::Migration
  def change
    add_column :answers, :correctness, :string
  end
end
