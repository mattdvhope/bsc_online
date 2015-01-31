require 'rails_helper'

describe Assessment do

  it { should belong_to(:course) }
  it { should belong_to(:part) }
  it { should belong_to(:lesson) }
  it { should have_many(:questions).dependent(:destroy) }

  it { should accept_nested_attributes_for :questions }

  anaf_for_questions = Question.nested_attributes_options[:questions]
  it { expect(anaf_for_questions[:reject_if].call({ "question_content" => "" })).to eq(true) }

  describe "#instantiate_new_choices_for_all_answers_for_new_student" do
    it "assigns a new Choice to each of the assessment's question's answers" do
      student = Fabricate(:user)
      answer1 = Fabricate(:answer)
      answer2 = Fabricate(:answer)
      question1 = Fabricate(:question)
      question1.answers << answer1
      question1.answers << answer2
      question2 = Fabricate(:question)
      question2.answers << answer1
      question2.answers << answer2
      exam = Fabricate(:assessment)
      exam.questions << question1
      exam.questions << question2
      exam.instantiate_new_choices_for_all_answers_for_new_student(student)
      expect(exam.questions.first.answers.first.choices.first).to have_attributes(answer_id: answer1.id, student_id: student.id, selected: false)
      expect(exam.questions.last.answers.last.choices.last).to have_attributes(answer_id: answer2.id, student_id: student.id, selected: false)
    end
  end

end


