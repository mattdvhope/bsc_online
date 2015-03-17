require 'rails_helper'

describe Admin::AssessmentsController do

  describe "GET index" do

    it_behaves_like "requires overseer" do
      let(:action) { get :index, { :curriculum_id => 1, :course_id => 1 } }
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
        let(:action) { post :create, { :curriculum_id => 1, :course_id => 1 } }
      end

      before :each do
        set_current_overseer
        @attrs = Fabricate.attributes_for(:assessment)
      end

      it "creates an assessment" do
        course = Fabricate(:course)
        post :create, assessment: @attrs, course_id: course.id, curriculum_id: course.curriculum.id
        expect(course.assessments.count).to eq(1)
      end

      it "sets the flash success" do
        course = Fabricate(:course)
        post :create, assessment: @attrs, course_id: course.id, curriculum_id: course.curriculum.id
        expect(flash[:success]).not_to be_blank
      end

      it "redirects to the assessment show page" do
        course = Fabricate(:course)
        post :create, assessment: @attrs, course_id: course.id, curriculum_id: course.curriculum.id
        expect(response).to redirect_to curriculum_course_assessment_path(course.curriculum, course, course.assessments.first)
      end

    end

    context "with invalid input" do

      it "sets the flash danger" do
        set_current_overseer
        attrs = Fabricate.attributes_for(:assessment, type_of: nil)
        course = Fabricate(:course)
        post :create, assessment: attrs, course_id: course.id, curriculum_id: course.curriculum.id
        expect(flash[:danger]).to eq "Your inputs were invalid. Please try again."
      end

      it "sets the @course for this assessment" do
        set_current_overseer
        course = Fabricate(:course)
        attrs = Fabricate.attributes_for(:assessment, type_of: nil)
        post :create, assessment: attrs, :curriculum_id => course.curriculum.id, :course_id => course.id
        expect(assigns(:course)).to be_instance_of Course
      end

      it "redirects to the assessment new page" do
        set_current_overseer
        attrs = Fabricate.attributes_for(:assessment, type_of: nil)
        course = Fabricate(:course)
        post :create, assessment: attrs, course_id: course.id, curriculum_id: course.curriculum.id
        expect(response).to redirect_to new_curriculum_course_admin_assessment_path
      end

    end

  end

  describe "GET edit" do

    it_behaves_like "requires overseer" do
      let(:action) { get :edit, { :curriculum_id => 1, :course_id => 1, :id => 1 } }
    end

    it "sets the @assessment for this assessment" do
      set_current_overseer
      assessment = Fabricate(:assessment)
      get :edit, { :curriculum_id => assessment.course.curriculum.id, :course_id => assessment.course.id, :id => assessment.id }
      expect(assigns(:assessment)).to be_instance_of Assessment
    end

  end

  describe "PATCH update" do

    context "with valid input" do

      it_behaves_like "requires overseer" do
        let(:action) { get :update, { :curriculum_id => 1, :course_id => 1, :id => 1 } }
      end

      before :each do
        @assessment = Fabricate(:assessment)
        @attrs = @assessment.attributes
      end

      it "located the requested @assessment" do
        set_current_overseer
        patch :update, id: @assessment, assessment: @attrs, course_id: @assessment.course.id, curriculum_id: @assessment.course.curriculum.id
        expect(assigns(:assessment)).to be_instance_of Assessment
      end

      it "changes @assessment's attributes" do
        set_current_overseer
        @attrs["content"] = "New content"
        patch :update, id: @assessment, assessment: @attrs, course_id: @assessment.course.id, curriculum_id: @assessment.course.curriculum.id
        @assessment.reload
        expect(@assessment.content).to eq "New content"
      end      

      it "sets the flash success" do
        set_current_overseer
        @attrs["content"] = "New content"
        patch :update, id: @assessment, assessment: @attrs, course_id: @assessment.course.id, curriculum_id: @assessment.course.curriculum.id
        @assessment.reload
        expect(flash[:success]).not_to be_blank
      end

      it "redirects to the updated assessment" do
        set_current_overseer
        @attrs["content"] = "New content"
        patch :update, id: @assessment, assessment: @attrs, course_id: @assessment.course.id, curriculum_id: @assessment.course.curriculum.id
        @assessment.reload
        expect(flash[:success]).to redirect_to curriculum_course_assessment_path(@assessment.course.curriculum, @assessment.course, @assessment)
      end

    end

    context "with invalid input" do

      it_behaves_like "requires overseer" do
        let(:action) { get :update, { :curriculum_id => 1, :course_id => 1, :id => 1 } }
      end

      before :each do
        @assessment = Fabricate(:assessment)
        @attrs = @assessment.attributes
      end

      it "does not change @assessment's attributes" do
        set_current_overseer
        @attrs["part_id"] = nil
        @attrs["content"] = "New content"
        patch :update, id: @assessment, assessment: @attrs, course_id: @assessment.course.id, curriculum_id: @assessment.course.curriculum.id
        @assessment.reload
        expect(@assessment.content).to_not eq "New content"
      end      

      it "sets the flash danger" do
        set_current_overseer
        @attrs["part_id"] = nil
        @attrs["content"] = "New content"
        patch :update, id: @assessment, assessment: @attrs, course_id: @assessment.course.id, curriculum_id: @assessment.course.curriculum.id
        @assessment.reload
        expect(flash[:danger]).not_to be_blank
      end

      it "redirects to the edit assessment path" do
        set_current_overseer
        @attrs["part_id"] = nil
        @attrs["content"] = "New content"
        patch :update, id: @assessment, assessment: @attrs, course_id: @assessment.course.id, curriculum_id: @assessment.course.curriculum.id
        @assessment.reload
        expect(response).to redirect_to edit_curriculum_course_admin_assessment_path(@assessment.course.curriculum, @assessment.course, @assessment)
      end

    end

  end

end