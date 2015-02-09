require 'rails_helper'

describe UsersController do

  describe "GET new" do

    it "sets the @user instance variable" do
      get :new
      expect(assigns(:user)).to be_instance_of(User)
    end

  end

  describe "POST create" do

    context "when guest successfully signs up, temporarily" do

      it "sets the flash success message for guest log in" do
        post :create
        expect(flash[:success]).to eq("You are logged in as a temporary guest. Please be aware that any work you do while logged in as a 'temporary guest' will not be recorded after you have logged out. But if you decide to Join BSC English Online (while still logged in this time!), all your work from this time will be retained.")
      end

      it "puts the logged in guest in the session" do
        post :create
        expect(session[:user_id]).to be_present
      end

      it "redirects guest to the student home page" do
        post :create
        expect(response).to redirect_to home_path
      end

    end

    context "when user successfully changes from temporary guest to permanent student" do

      it "transfers guest student's plans to new student" do
        post :create, guest: Fabricate.attributes_for(:guest)
        guest = User.first
        plan = Fabricate(:plan, student_id: guest.id)
        guest_plan_descr = plan.description
        post :create, user: Fabricate.attributes_for(:user)
        student = User.first
        expect(student.plans.first.description).to eq guest_plan_descr
        expect(User.count).to eq 1
      end

      it "transfers guest student's choices to new student" do
        post :create, guest: Fabricate.attributes_for(:guest)
        guest = User.first
        choice = Fabricate(:choice, student_id: guest.id)
        guest_choice_id = guest.choices.first.id
        post :create, user: Fabricate.attributes_for(:user)
        student = User.first
        expect(student.choices.first.id).to eq guest_choice_id
        expect(User.count).to eq 1
      end

    end

    context "when new student successfully signs up, permanently" do

      it "sets the flash success message for new student sign up & log in" do
        post :create, user: Fabricate.attributes_for(:user)
        student = User.first
        expect(flash[:success]).to eq "You now have a 'member account' with BSC English Online, #{student.first_name}. Welcome aboard!"
      end

      it "puts the logged in guest in the session" do
        post :create
        expect(session[:user_id]).to be_present
      end

      it "redirects guest to the student home page" do
        post :create
        expect(response).to redirect_to home_path
      end

    end

  end

end
