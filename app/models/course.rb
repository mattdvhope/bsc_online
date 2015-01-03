class Course < ActiveRecord::Base

  belongs_to :curriculum
  has_many :parts
  has_many :assessments

  def activated?
    self.activated == true
  end

end
