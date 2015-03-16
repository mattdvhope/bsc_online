class Course < ActiveRecord::Base

  belongs_to :curriculum
  has_many :parts
  has_many :lessons, through: :parts
  has_many :assessments

  validates_presence_of :name, :description, :curriculum_id
  validates_uniqueness_of :name, :description

  def activated?
    self.activated == true
  end

  def show_exam
    if self.assessments.count > 0
      self.assessments.each do |assessment|
        if assessment.type_of == "Exam"
          return assessment.type_of
        else
          return nil
        end
      end
    end
    nil
  end

end
