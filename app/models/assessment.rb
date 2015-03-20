class Assessment < ActiveRecord::Base

  belongs_to :course
  belongs_to :part
  belongs_to :lesson
  has_many :questions, :dependent => :destroy
  has_many :answers, :through => :questions
  has_many :grades, :dependent => :destroy

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

  def available_for_student_to_view?(student)
    if student.overseer_admin?
      return true
    elsif self.questions_not_all_answered_yet?(student)
      return true
    else
      return false
    end
  end

  def questions_not_all_answered_yet?(student)
    self.questions.each do |question|
      selected_booleans = []
      question.answers.each do |answer|
        selected_booleans << answer.choices.where(student_id: student.id).first.selected
      end
      return true unless selected_booleans.include?(true)
    end
    false
  end

  def make_sure_choices_are_instantiated(student)
    if self.choices_for_each_answer_not_yet_instantiated?(student)
      self.instantiate_new_choices_for_all_answers(student)
    end
  end

  def choices_for_each_answer_not_yet_instantiated?(student)
    self.answers.first.choices.where(student_id: student.id).count == 0 &&
    self.answers.last.choices.where(student_id: student.id).count == 0
  end

  def instantiate_new_choices_for_all_answers(student)
    self.questions.each do |question|
      question.answers.each do |answer|
        answer.choices << Choice.new(answer_id: answer.id, student_id: student.id, selected: false)
      end
    end
  end

  def provide_grade_object_for_this_assessment(student)
    self.grades.where(student_id: student.id).first
  end

end
