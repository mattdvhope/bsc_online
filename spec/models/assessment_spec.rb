require 'rails_helper'

describe Assessment do

  it { should belong_to(:course) }
  it { should belong_to(:part) }
  it { should belong_to(:lesson) }
  it { should have_many(:questions).dependent(:destroy) }

  it { should accept_nested_attributes_for :questions }

  anaf_for_questions = Assessment.nested_attributes_options[:questions]
  it { expect(anaf_for_questions[:reject_if].call({ "question_content" => "" })).to eq(true) }

  it { should validate_presence_of(:type_of) }
  it { should validate_presence_of(:part_id) }
  it "validates presence of lesson_id when it is a Quiz" do
    expect(Assessment.new(type_of: "Quiz")).to validate_presence_of(:lesson_id)
  end

  describe "#a_quiz?" do

    it "is true if the Assessment is a Quiz" do
      assessment = Fabricate(:assessment, type_of: "Quiz")
      expect(assessment.a_quiz?).to eq true
    end

    it "is false if the Assessment is not a Quiz" do
      assessment = Fabricate(:assessment, type_of: "Test")
      expect(assessment.a_quiz?).to eq false
    end

  end

  describe "#an_exam?" do

    it "is true if the Assessment is an Exam" do
      assessment = Fabricate(:assessment, type_of: "Exam")
      expect(assessment.an_exam?).to eq true
    end

    it "is false if the Assessment is not an Exam" do
      assessment = Fabricate(:assessment, type_of: "Test")
      expect(assessment.an_exam?).to eq false
    end

  end

  describe "#has_no_student_choices_yet? is true if student has no choices" do
    it "checks if student has been to 'lesson/part/course' show page & instantiated choices" do
      student = Fabricate(:user)
      answer = Fabricate(:answer)
      assessment = answer.question.assessment
      expect(assessment.has_no_student_choices_yet?(student)).to eq true
    end
  end

  describe "#has_no_student_choices_yet? is false if student has choices" do
    it "checks if student has been to 'lesson/part/course' show page & instantiated choices" do
      student = Fabricate(:user)
      answer = Fabricate(:answer)
      assessment = answer.question.assessment
      assessment.instantiate_new_choices_for_all_answers_for_new_student(student)
      expect(assessment.has_no_student_choices_yet?(student)).to eq false
    end
  end

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
