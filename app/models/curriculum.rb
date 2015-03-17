class Curriculum < ActiveRecord::Base

  has_many :courses
  has_many :plans
  has_many :students, through: :plans

  validates_presence_of :name, :description
  validates_uniqueness_of :name, :description

end
