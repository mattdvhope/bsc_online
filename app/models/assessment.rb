class Assessment < ActiveRecord::Base

  belongs_to :course
  belongs_to :part
  belongs_to :lesson
  has_many :questions, :dependent => :destroy

  accepts_nested_attributes_for :questions, reject_if: proc { |attributes| attributes['question_content'].blank? }, allow_destroy: true

  validates_presence_of :part_id, :unless => :an_exam?
  validates_presence_of :lesson_id, :unless => :a_test?, :unless => :an_exam?
  validates_presence_of :type_of 

  def a_test?
    self.type_of == "Test"
  end

  def an_exam?
    self.type_of == "Exam"
  end

  def instantiate_new_choices_for_all_answers_for_new_questions(student)
    self.questions.each do |question|
      question.answers.each do |answer|
        answer.choices << Choice.new(answer_id: answer.id, student_id: student.id, selected: false)
      end
    end
  end

end
