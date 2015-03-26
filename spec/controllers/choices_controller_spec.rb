require 'rails_helper'

describe ChoicesController do

  describe "PATCH update" do

    before :each do
      @alice = Fabricate(:user) # alice's id equals @choice's student_id/user_id
      set_current_user(@alice)
      @choice = Fabricate(:choice, student_id: @alice.id) # a single answer (w/ question) is instantiated here that has_many choices
    end

    it "sets @choice" do
      xhr :patch, :update, id: @choice.id, format: :js
      expect(assigns(:choice)).to be_instance_of Choice
    end

    it "when @choice is clicked, the question's answers' choices (for that student) have each of their 'selected' attributes changed to 'false'" do
      question = @choice.question
      answer2 = Answer.create(question_id: question.id)
      answer2.choices << Choice.create(answer_id: answer2.id, student_id: @alice.id, selected: true)
      question.answers << answer2 # question now has its first answer's choice 'false' and its second answer's choice 'true'.
      xhr :patch, :update, id: @choice.id, format: :js
      @choice.reload
      expect(question.answers.last.choices.first).to have_attributes(:selected => false)
    end

    it "when @choice is clicked, its selected attribute becomes true" do
      question = @choice.question
      answer2 = Answer.create(question_id: question.id)
      answer2.choices << Choice.create(answer_id: answer2.id, student_id: @alice.id, selected: false)
      question.answers << answer2 # The question w/ its two answers (w/ both choices' selected: false) is now fully built.
      xhr :patch, :update, id: @choice.id, format: :js
      @choice.reload
      expect(@choice).to have_attributes(:selected => true)
    end

    it "when @choice is clicked, it renders choices/update.js template" do
      xhr :patch, :update, id: @choice.id, format: :js
      expect(response).to render_template("choices/update")
    end

  end

end
