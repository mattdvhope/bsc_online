class Lesson < ActiveRecord::Base

  include AssessmentProvidable

  belongs_to :part
  has_many :stories
  has_many :conversations
  has_many :practices
  has_many :assessments

end
