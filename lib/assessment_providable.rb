module AssessmentProvidable

  def show_assessment
    if self.assessments.count > 0
      case self.class.name
      when "Course"
        self.assessments.each do |assessment|
          if assessment.type_of == "Exam"
            return assessment.type_of
          end
        end
      when "Part"
        self.assessments.each do |assessment|
          if assessment.type_of == "Test"
            return assessment.type_of
          end
        end
      when "Lesson"
        self.assessments.each do |assessment|
          if assessment.type_of == "Quiz"
            return assessment.type_of
          end
        end
      end
    end
    nil
  end

  def provide_assessment_object
    case self.class.name
    when "Course"
      self.assessments.each do |assessment|
        if assessment.type_of == "Exam"
          return assessment
        end
      end
    when "Part"
      self.assessments.each do |assessment|
        if assessment.type_of == "Test"
          return assessment
        end
      end
    when "Lesson"
      self.assessments.each do |assessment|
        if assessment.type_of == "Quiz"
          return assessment
        end
      end
    end
    nil
  end

end