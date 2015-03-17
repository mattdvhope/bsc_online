class Part < ActiveRecord::Base

  include AssessmentProvidable

  belongs_to :course
  has_many :lessons
  has_many :assessments

end
