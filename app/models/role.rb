class Role < ActiveRecord::Base

  belongs_to :overseer, class_name: "User"

end
