class Plan < ActiveRecord::Base

  belongs_to :curriculum
  belongs_to :student, class_name: "User"

  validates_presence_of :curriculum_id
  validates_presence_of :student_id
  validates_presence_of :description

end
