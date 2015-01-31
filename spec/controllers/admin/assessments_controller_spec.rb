require 'rails_helper'

describe Admin::AssessmentsController do

  describe "GET index" do

    it_behaves_like "requires log in" do
      let(:action) { 
        assessment = Fabricate(:assessment)
        get :index, curriculum_id: assessment.course.curriculum.id, course_id: assessment.course.id, id: assessment.id
      }
    end

    it "renders the index template" do
      set_current_user
      test = Fabricate(:assessment)
      quiz = Fabricate(:assessment)
binding.pry
      expect(response).to render_template :index
    end

  end

  describe "GET new" do

    it_behaves_like "requires log in" do
      let(:action) { get :new, { :curriculum_id => 1, :course_id => 1 } }
    end

    it "sets the @course for this assessment" do
      set_current_user
      get :new, { :curriculum_id => 1, :course_id => 1 }
      expect(assigns(:course)).to be_instance_of Course
    end

    it "sets the @assessment to a new assessment with course_id" do
      set_current_user
      get :new, { :curriculum_id => 1, :course_id => 1 }
      expect(assigns(:assessment)).to be_instance_of(Assessment)
      expect(assigns(:assessment)).to be_new_record 
    end

  end

end