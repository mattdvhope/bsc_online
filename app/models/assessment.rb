class Assessment < ActiveRecord::Base

  belongs_to :course
  belongs_to :part
  belongs_to :lesson
  has_many :questions, :dependent => :destroy
  has_many :answers, :through => :questions

  accepts_nested_attributes_for :questions, reject_if: proc { |attributes| attributes['question_content'].blank? }, allow_destroy: true

  validates_presence_of :type_of
  validates_presence_of :part_id, :unless => :an_exam?
  validates_presence_of :lesson_id, :if => :a_quiz?

  def a_quiz?
    self.type_of == "Quiz"
  end

  def an_exam?
    self.type_of == "Exam"
  end

  def answers_of_student_not_all_chosen_yet?(student)
    answer_count = 0
    choice_count = 0
    self.questions.each do |question|
      question.answers.each do |answer|
        answer_count+=
        choice_count = choice_count + 1 if answer.choices.where(student_id: student.id).count == 1
      end
    end
    answer_count > choice_count ? true : false
  end

  def instantiate_new_choices_for_all_answers_for_new_student(student)
    self.questions.each do |question|
      question.answers.each do |answer|
        answer.choices << Choice.new(answer_id: answer.id, student_id: student.id, selected: false)
      end
    end
  end

end
