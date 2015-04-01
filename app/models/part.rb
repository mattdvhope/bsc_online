class Part < ActiveRecord::Base

  include AssessmentProvidable

  belongs_to :course
  has_many :lessons
  has_many :assessments

  validates_presence_of :name, :course_id
  validates_uniqueness_of :name

end
