class Assessment < ActiveRecord::Base

  belongs_to :course
  belongs_to :part
  belongs_to :lesson
  has_many :questions, :dependent => :destroy

  accepts_nested_attributes_for :questions, reject_if: lambda { |a| a[:question_content].blank? }, allow_destroy: true

  def make_answers_correct_true_if_choice_correct
    self.questions.each do |question|
      question.answers.each do |answer|
        answer.correct = true if answer.choice == "Correct"
      end
    end
  end

end
