require 'rails_helper'

describe CoursesController do

  it_behaves_like "requires log in" do
    let(:action) {
      course = Fabricate(:course)
      get :show, id: course.id
    }
  end

  describe "GET show" do

    it "sets @course" do
      set_current_user
      course = Fabricate(:course)
      get :show, id: course.id
      expect(assigns(:course)).to be_instance_of Course
    end

    it "renders show page if course.id is 1" do
      set_current_user
      course = Fabricate(:course, id: 1)
      get :show, id: course.id
      expect(response).to render_template("show")
    end

    it "renders under_construction page if course.id is not 1" do
      set_current_user
      course = Fabricate(:course, id: 2)
      get :show, id: course.id
      expect(response).to render_template("under_construction")
    end

    it "assigns the @assessment variable from the @course that provides the assessment object" do
      alice = Fabricate(:user)
      set_current_user(alice)
      answer = Fabricate(:answer)
      question = Fabricate(:question)
      question.answers << answer
      assessment = Fabricate(:assessment, type_of: 'Exam')
      assessment.questions << question
      get :show, id: assessment.course.id
      expect(alice.choices.count).to eq 1 # not 2 or 0!!
    end

  end

end
