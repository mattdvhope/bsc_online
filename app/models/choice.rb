class Choice < ActiveRecord::Base

  belongs_to :answer
  has_one :question, through: :answer
  belongs_to :student, class_name: "User"

end
