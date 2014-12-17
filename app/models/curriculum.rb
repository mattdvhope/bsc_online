class Curriculum < ActiveRecord::Base

  has_many :courses
  has_many :syllabuses
  has_many :students, through: :syllabuses, class_name: "User"

end
