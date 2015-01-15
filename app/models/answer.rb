class Answer < ActiveRecord::Base

  belongs_to :question
  has_one :student_answer, :dependent => :destroy

end
