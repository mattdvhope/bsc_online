class Curriculum < ActiveRecord::Base

  has_many :courses
  has_many :plans
  has_many :students, through: :plans

end
