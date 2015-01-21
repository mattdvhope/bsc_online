class Assessment < ActiveRecord::Base

  belongs_to :course
  belongs_to :part
  belongs_to :lesson
  has_many :questions, :dependent => :destroy

  accepts_nested_attributes_for :questions, reject_if: lambda { |a| a[:question_content].blank? }, allow_destroy: true

  def set_all_answers_false
    self.questions.each do |question|
      question.answers.map do |answer|
        answer.correct = false
      end
    end
  end

  def make_answers_correct_true_if_choice_correct
    self.questions.each do |question|
      question.answers.each do |answer|
        answer.correct = true if answer.choice == "Correct"
      end
    end
  end

  def assign_student_to_answers_in_this_assessment(student)
    self.questions.each do |question|
      question.answers.map do |answer|
        answer.student_id = student.id
      end
    end
  end

end
