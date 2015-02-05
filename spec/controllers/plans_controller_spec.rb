require 'rails_helper'

describe PlansController do

  describe "GET #index" do

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

  describe "GET #show" do

    it "sets @plan" do
      set_current_user
      plan = Plan.create(curriculum_id: 1, student_id: 1, description: "Great plan!")
      get :show, id: plan.id
      expect(assigns(:plan)).to be_instance_of Plan
    end

  end

  describe "GET #new" do

    it_behaves_like "requires log in" do
      let(:action) { get :new }
    end

    it "sets the @plan to a new plan" do
      set_current_user
      get :new
      expect(assigns(:plan)).to be_instance_of Plan
    end

  end

  describe "POST #create" do

    context "with valid input" do

      it_behaves_like "requires log in" do
        let(:action) { post :create }
      end

      it "saves the new plan in the database" do
        set_current_user
        plan = Plan.new(curriculum_id: 1, student_id: 1, description: "Great plan!")
        plan_attrs = plan.attributes
        post :create, plan: plan_attrs
        expect(Plan.all.count).to eq(1)
      end

      it "sets the flash success" do
        set_current_user
        plan = Plan.new(curriculum_id: 1, student_id: 1, description: "Great plan!")
        plan_attrs = plan.attributes
        post :create, plan: plan_attrs
        expect(flash[:success]).not_to be_blank
      end

      it "redirects to contacts#show" do
        alice = Fabricate(:user)
        set_current_user(alice)
        plan = Plan.new(curriculum_id: 1, student_id: alice.id, description: "Great plan!")
        plan_attrs = plan.attributes
        post :create, plan: plan_attrs
        expect(response).to redirect_to plan_path(alice.plans.first)
      end

    end

    context "with invalid input" do

      it "does not save the new contact in the database" do
        set_current_user
        plan = Plan.new(student_id: 1, description: "Great plan!")
        plan_attrs = plan.attributes
        post :create, plan: plan_attrs
        expect(Plan.all.count).to eq(0)
      end

      it "sets the flash danger" do
        set_current_user
        plan = Plan.new(student_id: 1, description: "Great plan!")
        plan_attrs = plan.attributes
        post :create, plan: plan_attrs
        expect(flash[:danger]).not_to be_blank
      end

      it "re-renders the :new template" do
        set_current_user
        plan = Plan.new(student_id: 1, description: "Great plan!")
        plan_attrs = plan.attributes
        post :create, plan: plan_attrs
        expect(response).to render_template 'new'
      end

    end

  end

end
