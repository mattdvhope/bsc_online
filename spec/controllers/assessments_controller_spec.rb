require 'rails_helper'

describe AssessmentsController do

  describe "GET show" do

    it_behaves_like "requires log in" do
      let(:action) { 
        assessment = Fabricate(:assessment)
        get :show, curriculum_id: assessment.course.curriculum.id, course_id: assessment.course.id, id: assessment.id
      }
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

    context "first time the assessment show page is shown" do

      it "instantiates new choices for all answers for new student if the question has no choices yet" do
        set_current_user
        answer = Fabricate(:answer)
        assessment = answer.question.assessment
        get :show, curriculum_id: assessment.course.curriculum.id, course_id: assessment.course.id, id: assessment.id
        expect(assessment.questions.first.choices.size).to be > 0
      end

    end

    context "subsequent times the assessment show page is shown" do

      it "does not instantiate new choices for all answers for new student if the question has choices" do
        alice = Fabricate(:user)
        set_current_user(alice)
        answer = Fabricate(:answer)
        assessment = answer.question.assessment
        get :show, curriculum_id: assessment.course.curriculum.id, course_id: assessment.course.id, id: assessment.id
        get :show, curriculum_id: assessment.course.curriculum.id, course_id: assessment.course.id, id: assessment.id
        expect(assessment.questions.first.choices.size).to eq 1
      end

    end

    it "renders the show template" do
      assessment = Fabricate(:assessment)
      set_current_user
      question = Fabricate(:question)
      question.answers << Fabricate(:answer)
      assessment.questions << question
      get :show, curriculum_id: assessment.course.curriculum.id, course_id: assessment.course.id, id: assessment.id
      expect(response).to render_template(:show)
    end

  end

end
