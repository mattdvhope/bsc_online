class Answer < ActiveRecord::Base

  belongs_to :question
  belongs_to :student, class_name: "User"
  has_one :student_answer, :dependent => :destroy

end
