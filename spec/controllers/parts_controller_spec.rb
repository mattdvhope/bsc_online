require 'rails_helper'

describe PartsController do

  it_behaves_like "requires log in" do
    let(:action) {
      part = Part.create
      get :show, id: part.id
    }
  end

  describe "GET show" do

    it "sets @part" do
      set_current_user
      part = Part.create(name: "Part 1")
      get :show, id: part.id
      expect(assigns(:part)).to be_instance_of Part
    end

    it "assigns the @assessment variable from the @part that provides the assessment object" do
      alice = Fabricate(:user)
      set_current_user(alice)
      part = Part.create
      answer = Fabricate(:answer)
      question = Fabricate(:question)
      question.answers << answer
      assessment = Fabricate(:assessment, part_id: part.id, type_of: 'Test')
      assessment.questions << question
      get :show, id: part.id
      expect(alice.choices.count).to eq 1 # not 2 or 0!!
    end

  end

end
