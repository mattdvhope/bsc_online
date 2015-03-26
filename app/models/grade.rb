class Grade < ActiveRecord::Base

  belongs_to :student, class_name: "User"
  belongs_to :assessment

  def student_score_for_assessment(student)
    number_correct = self.number_of_questions_answered_correctly(student)
    number_of_questions = self.assessment.questions.count

    # You might need to round up the float before this b/c '#score' is an integer -- not a float!
    self.score = ((number_correct.to_f / number_of_questions.to_f) * 100).round(2)
    self.save
    return self.score
  end

  def number_of_questions_answered_correctly(student)
    questions_answered_correctly = 0
    self.assessment.questions.each do |question|
      question.answers.each do |answer|
        answer_selected = answer.choices.where(student_id: student.id).first.selected
        if answer.choice == "Correct" && answer_selected == true
          questions_answered_correctly = questions_answered_correctly + 1
        end
      end
    end
    questions_answered_correctly
  end

end