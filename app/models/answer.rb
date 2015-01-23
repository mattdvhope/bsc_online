class Answer < ActiveRecord::Base

  belongs_to :question
  has_many :choices, as: :selectable, :dependent => :destroy

end
