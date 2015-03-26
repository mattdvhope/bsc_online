require 'rails_helper'

describe LessonsController do

  it_behaves_like "requires log in" do
    let(:action) {
      part = Part.create
      lesson = Lesson.create(part_id: part.id)
      get :show, part_id: part.id, id: lesson.id
    }
  end

  describe "GET show" do

    it "sets @lesson" do
      set_current_user
      part = Part.create
      lesson = Lesson.create(part_id: part.id)
      get :show, id: lesson.id, part_id: part.id
      expect(assigns(:lesson)).to be_instance_of Lesson
    end

    it "assigns the @assessment variable from the @lesson that provides the assessment object" do
      alice = Fabricate(:user)
      set_current_user(alice)
      part = Part.create
      lesson = Lesson.create(part_id: part.id)
      answer = Fabricate(:answer)
      question = Fabricate(:question)
      question.answers << answer
      assessment = Fabricate(:assessment, part_id: part.id, lesson_id: lesson.id, type_of: 'Quiz')
      assessment.questions << question
      get :show, id: lesson.id, part_id: part.id
      expect(alice.choices.count).to eq 1 # not 2 or 0!!
    end

  end

end
