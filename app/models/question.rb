class Question < ActiveRecord::Base

  belongs_to :assessment
  has_many :answers, :dependent => :destroy
  has_many :choices, through: :answers

  accepts_nested_attributes_for :answers, reject_if: proc { |attributes| attributes['answer_content'].blank? }, allow_destroy: true

  def hash_of_answers_and_student_choices(student)
    choices = self.array_of_choices_for_this_student_and_this_question(student)
    answers_choices_hash = {}
    self.answers.each do |answer|
      answers_choices_hash.merge!({answer => choices.shift})
    end
    answers_choices_hash
  end

  def array_of_choices_for_this_student_and_this_question(student)
    collected_choices = []
    self.answers.each do |answer|
      collected_choices << answer.choices.where(student_id: student.id)
    end
    collected_choices.flatten!
  end


end
