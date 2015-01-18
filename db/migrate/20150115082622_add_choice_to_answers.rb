class AddChoiceToAnswers < ActiveRecord::Migration
  def change
    add_column :answers, :choice, :string
  end
end
