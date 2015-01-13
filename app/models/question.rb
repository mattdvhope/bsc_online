class Question < ActiveRecord::Base

  belongs_to :assessment
  has_many :answers, :dependent => :destroy

  accepts_nested_attributes_for :answers, reject_if: lambda { |a| a[:answer_content].blank? }, allow_destroy: true

  def verify_one_correct_answer
    correct_answers = []
    self.answers.each do |answer|
      correct_answers << answer if answer.correct?
    end
    return correct_answers
  end

end
