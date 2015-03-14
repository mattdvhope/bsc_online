class Course < ActiveRecord::Base

  belongs_to :curriculum
  has_many :parts
  has_many :lessons, through: :parts
  has_many :assessments

  def activated?
    self.activated == true
  end

  def show_exam
    self.assessments.each do |assessment|
      if assessment.type_of == "Exam"
        return assessment.type_of
      else
        return nil
      end
    end
  end

end
