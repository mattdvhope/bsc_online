require 'rails_helper'

describe AssessmentsController do

  describe "GET show" do

    it_behaves_like "requires log in" do
      let(:action) { 
        assessment = Fabricate(:assessment)
        get :show, curriculum_id: assessment.course.curriculum.id, course_id: assessment.course.id, id: assessment.id
      }
    end

    it "sets @assessment" do
      set_current_user
      assessment = Fabricate(:assessment)
      get :show, curriculum_id: assessment.course.curriculum.id, course_id: assessment.course.id, id: assessment.id
      expect(assigns(:assessment)).to be_instance_of Assessment
    end

    it "sets @grade" do
      set_current_user
      assessment = Fabricate(:assessment)
      get :show, curriculum_id: assessment.course.curriculum.id, course_id: assessment.course.id, id: assessment.id
      expect(assigns(:grade)).to be_instance_of Grade
    end

    context "the assessment has no questions" do

      it "sets the flash danger" do
        set_current_user
        assessment = Fabricate(:assessment)
        get :show, curriculum_id: assessment.course.curriculum.id, course_id: assessment.course.id, id: assessment.id
        expect(flash[:danger]).to eq "You need to put questions & answers in. Try again."
      end

      it "destroys the assessment" do
        set_current_user
        assessment = Fabricate(:assessment)
        get :show, curriculum_id: assessment.course.curriculum.id, course_id: assessment.course.id, id: assessment.id
        expect(Assessment.all.size).to eq 0
      end

      it "redirects to new_curriculum_course_admin_assessment_path" do
        set_current_user
        assessment = Fabricate(:assessment)
        get :show, curriculum_id: assessment.course.curriculum.id, course_id: assessment.course.id, id: assessment.id
        expect(response).to redirect_to new_curriculum_course_admin_assessment_path
      end

    end

    context "the assessment has questions" do # A correctly built assessment exists here.

      before :each do
        @answer = Fabricate(:answer) # also a question, assessment, course & curriculum automatically fabricated
        @question = @answer.question
        @assessment = @answer.question.assessment
        @course = @answer.question.assessment.course
        @curriculum = @answer.question.assessment.course.curriculum
      end

      it "renders the show template and instantiates new choices for all answers for new student" do
        alice = Fabricate(:user)
        set_current_user(alice)
        get :show, curriculum_id: @curriculum.id, course_id: @course.id, id: @assessment.id
        expect(response).to render_template(:show)
      end

      it "renders the show template and does not instantiate new choices for returning student" do
        alice = Fabricate(:user)
        set_current_user(alice)
        get :show, curriculum_id: @curriculum.id, course_id: @course.id, id: @assessment.id
        get :show, curriculum_id: @curriculum.id, course_id: @course.id, id: @assessment.id
        expect(response).to render_template(:show)
      end

    end

  end

end
