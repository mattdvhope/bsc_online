class Assessment < ActiveRecord::Base

  belongs_to :course
  belongs_to :part
  belongs_to :lesson
  has_many :questions, :dependent => :destroy

  accepts_nested_attributes_for :questions, reject_if: lambda { |a| a[:question_content].blank? }, allow_destroy: true

  def instantiate_new_choices(student)
    self.questions.each do |question|
      question.answers.each do |answer|
        answer.choices.each = StudentAnswer.new(student_id: student.id)
      end
    end
  end

  # def set_all_answer_choices_selected_false
  #   self.questions.each do |question|
  #     question.answers.each do |answer|
  #       answer.choices.map do |choice|
  #         choice = false
  #       end
  #     end
  #   end
  # end

#   def make_answers_correct_true_if_choice_correct
#     self.questions.each do |question|
#       question.answers.each do |answer|
#         answer.correct = true if answer.choice == "Correct"
#       end
#     end
#   end

#   def assign_new_student_to_assessment_answers(student)
#     self.questions.each do |question|
#       question.answers.each do |answer|

#       end
#     end    
#   end

end
