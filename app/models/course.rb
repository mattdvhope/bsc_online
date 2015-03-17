class Course < ActiveRecord::Base

  include AssessmentProvidable

  belongs_to :curriculum
  has_many :parts
  has_many :lessons, through: :parts
  has_many :assessments

  validates_presence_of :name, :description, :curriculum_id
  validates_uniqueness_of :name, :description

  def activated?
    self.activated == true
  end

end
