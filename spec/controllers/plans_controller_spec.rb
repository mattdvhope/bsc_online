require 'rails_helper'

describe PlansController do

  describe "GET new" do
    it_behaves_like "requires log in" do
      let(:action) { get :new }
    end

    it "sets the @plan to a new plan" do
      set_current_user
      get :new
      expect(assigns(:plan)).to be_instance_of Plan
    end
  end

  describe "GET index" do
    it "renders index template if student has any plans" do
      student = Fabricate(:user)
      set_current_user(student)
      curriculum1 = Fabricate(:curriculum)
      curriculum2 = Fabricate(:curriculum)
      plan1 = Plan.create(curriculum_id: curriculum1.id, student_id: student.id, description: "Great plan one!!")
      plan2 = Plan.create(curriculum_id: curriculum2.id, student_id: student.id, description: "Great plan two!!")
      plans = [plan1, plan2]
      get :index
      expect(response).to render_template('index')
    end
    it "redirects to new plan path if student has no plans yet" do
      student = Fabricate(:user)
      set_current_user(student)
      get :index
      expect(response).to redirect_to new_plan_path
    end
  end

end
