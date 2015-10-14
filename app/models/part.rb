class Part < ActiveRecord::Base

  include AssessmentProvidable

  belongs_to :course
  has_many :lessons, :dependent => :destroy
  has_many :assessments, :dependent => :destroy

  validates_presence_of :name, :course_id
  validates_uniqueness_of :name

end
