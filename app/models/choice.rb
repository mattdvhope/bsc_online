class Choice < ActiveRecord::Base

  belongs_to :selectable, polymorphic: true

end
