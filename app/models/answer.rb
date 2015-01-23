class Answer < ActiveRecord::Base

  belongs_to :question
  has_many :choices, :dependent => :destroy
  # has_many :students, through: :choices, class_name: "User"

end
