class Assessment < ActiveRecord::Base

  belongs_to :course
  belongs_to :part
  belongs_to :lesson
  has_many :questions, :dependent => :destroy

  accepts_nested_attributes_for :questions, reject_if: proc { |attributes| attributes['question_content'].blank? }, allow_destroy: true


  def instantiate_new_choices_for_all_answers_for_new_student(student)
    self.questions.each do |question|
      question.answers.each do |answer|
        answer.choices << Choice.new(answer_id: answer.id, student_id: student.id, selected: false)
      end
    end
  end

end
