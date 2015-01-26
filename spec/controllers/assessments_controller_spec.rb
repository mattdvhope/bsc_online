require 'rails_helper'

describe AssessmentsController do

  describe "GET show" do # I need an @assessment with an id for this spec to work.

  I must instantiate an Assessment here first.

    it_behaves_like "requires log in" do
      let(:action) { get :show, id: assessment.id }
    end

    it "renders the show template" do
      set_current_user
      get :show, id: assessment.id
      expect(response).to render_template(:show)
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
    end

  end

end
