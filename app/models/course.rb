class Course < ActiveRecord::Base

  def activated?
    self.activated == true
  end

end
