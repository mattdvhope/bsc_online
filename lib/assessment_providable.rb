module AssessmentProvidable

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

  def provide_exam_object
    self.assessments.each do |assessment|
      if assessment.type_of == "Exam"
        return assessment
      end
    end
    nil
  end

end