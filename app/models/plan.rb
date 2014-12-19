class Plan < ActiveRecord::Base

  belongs_to :curriculum
  belongs_to :student, class_name: "User"

end
