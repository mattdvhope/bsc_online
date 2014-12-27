class Course < ActiveRecord::Base

  belongs_to :curriculum
  has_many :parts

  def activated?
    self.activated == true
  end

end
