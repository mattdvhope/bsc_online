require 'rails_helper'

describe GradesController do

  it_behaves_like "requires log in" do
    let(:action) {
      assessment = Fabricate(:assessment)
      alice = Fabricate(:user)
      grade = Grade.create(student_id: alice.id, assessment_id: assessment.id)
      get :show, id: grade.id
    }
  end

  describe "GET index" do
  end

  describe "GET show" do

    it "sets @grade" do
      assessment = Fabricate(:assessment)
      alice = Fabricate(:user)
      set_current_user(alice)
      grade = Grade.create(student_id: alice.id, assessment_id: assessment.id)
      get :show, id: grade.id
      expect(assigns(:grade)).to be_instance_of Grade
    end

  end

  describe "PATCH update" do

    it "sets @grade" do
      assessment = Fabricate(:assessment)
      alice = Fabricate(:user)
      set_current_user(alice)
      grade = Grade.create(student_id: alice.id, assessment_id: assessment.id)
      patch :update, id: grade.id
      expect(assigns(:grade)).to be_instance_of Grade
    end

    it "it gives the score for @grade" do
      alice = Fabricate(:user)
      set_current_user(alice)
      answer = Fabricate(:answer)
      question = Fabricate(:question)
      question.answers << answer
      assessment = Fabricate(:assessment)
      assessment.questions << question
      choice = Choice.create(answer_id: answer.id, student_id: alice.id)
      choice.selected = true
      answer.choices << choice
      grade = Grade.create(student_id: alice.id, assessment_id: assessment.id)
      patch :update, id: grade.id
      grade.reload
      expect(grade.score).not_to eq nil
    end

    it "redirects to log out path" do
      assessment = Fabricate(:assessment)
      alice = Fabricate(:user)
      set_current_user(alice)
      grade = Grade.create(student_id: alice.id, assessment_id: assessment.id)
      patch :update, id: grade.id
      expect(response).to redirect_to log_out_path
    end

  end

end
