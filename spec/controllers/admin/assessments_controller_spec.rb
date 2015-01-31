require 'rails_helper'

describe Admin::AssessmentsController do

  describe "GET index" do

    it_behaves_like "requires overseer" do
      let(:action) { get :new, { :curriculum_id => 1, :course_id => 1 } }
    end

    it "sets @assessments to all assessments" do
      set_current_overseer
      test = Fabricate(:assessment)
      get :index, { :curriculum_id => 1, :course_id => 1 }
      expect(assigns(:assessments)).to eq([test])
    end

    it "renders the :index view" do
      set_current_overseer
      get :index, { :curriculum_id => 1, :course_id => 1 }
      expect(response).to render_template :index
    end

  end

  describe "GET new" do

    it_behaves_like "requires overseer" do
      let(:action) { get :new, { :curriculum_id => 1, :course_id => 1 } }
    end

    it "sets the @course for this assessment" do
      set_current_overseer
      course = Fabricate(:course)
      get :new, { :curriculum_id => course.curriculum.id, :course_id => course.id }
      expect(assigns(:course)).to be_instance_of Course
    end

    it "sets the @assessment to a new assessment with course_id" do
      set_current_overseer
      course = Fabricate(:course)
      get :new, { :curriculum_id => course.curriculum.id, :course_id => course.id }
      expect(assigns(:assessment)).to be_instance_of(Assessment)
      expect(assigns(:assessment)).to be_new_record 
    end

  end

  describe "POST create" do

    context "with valid input" do

      it_behaves_like "requires overseer" do
        let(:action) { get :new, { :curriculum_id => 1, :course_id => 1 } }
      end

      it "redirects to the assessment show page" do
        set_current_overseer
        post :create, assessment: { recipient_name: "Tom Jones", recipient_email: "tom@test.tv", message: "Friend me at MyFlix." }
        expect(response).to redirect_to new_invitation_path
      end
      
    end

    context "with invalid input" do

      
    end

  end









end