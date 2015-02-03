require 'rails_helper'

describe ChoicesController do

  it_behaves_like "requires log in" do
    let(:action) { get :edit, id: 1 }
  end

  describe "GET edit" do

    before :each do
      @choice = Fabricate(:choice)
    end

    it "sets @choice" do
      set_current_user
      xhr :get, :edit, id: @choice.id, format: :js
      expect(assigns(:choice)).to be_instance_of Choice
    end

    it "finds all the choices of that choice's question" do
      alice = Fabricate(:user)
      set_current_user(alice)
      question = @choice.question
      answer2 = Fabricate(:answer)
      answer2.choices << Choice.create(answer_id: answer2.id, student_id: alice.id)
      question.answers << answer2
      question.answers.find(1).choices.first.student_id = alice.id
      question.answers.find(2).choices.first.student_id = alice.id
      answer3 = Answer.create(question_id: question.id)
      answer3.choices << Choice.create(answer_id: answer2.id, student_id: 2)
      question.answers << answer3
      xhr :get, :edit, id: @choice.id, format: :js
      expect(@choice.question.choices.where(student_id: alice.id).size).to eq 2
    end

    it "updates the selected attribute to false for that question's choices" do
      set_current_user
      xhr :get, :edit, id: @choice.id, format: :js
      expect(@choice.selected).to eq false
    end

    it "updates the selected attribute in clicked @choice to true" do
      set_current_user
      xhr :get, :edit, id: @choice.id, format: :js
      expect(@choice.selected).to eq false
    end

    it "redirects to assessment show page"

  end

end
