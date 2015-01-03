class Part < ActiveRecord::Base

  belongs_to :course
  has_many :lessons
  has_many :assessments

end
