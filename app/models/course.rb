class Course < ActiveRecord::Base

  belongs_to :curriculum

  def activated?
    self.activated == true
  end

end
