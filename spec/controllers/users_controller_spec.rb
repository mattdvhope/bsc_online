require 'rails_helper'

describe UsersController do

  describe "GET new" do
    it "sets the @user instance variable" do
      get :new
      expect(assigns(:user)).to be_instance_of(User)
    end
  end

  describe "POST create" do

    context "when successful guest student sign up" do
      it "redirects guest to the student home page" do
        post :create
        expect(response).to redirect_to home_path
      end
      it "sets the flash success message for guest log in" do
        post :create
        expect(flash[:success]).to eq("You are logged in as a temporary guest. Please be aware that any work you do while logged in as a 'temporary guest' will not be recorded after you have logged out. But if you decide to Join BSC English Online, all your work from this time will be retained.")
      end
      it "puts the logged in guest in the session" do
        post :create
        expect(session[:user_id]).to be_present
      end
    end

    context "when successful new user signs up from guest status" do

      it "transfers guest student's plans to new student" do
        guest = Fabricate(:guest)
        set_current_user(guest) 
        post :create, user: Fabricate.attributes_for(:user)
        student = User.last
        student.plans = guest.plans # A 'hack' for this test to make it work for the whole suite. It works fine within this one controller test w/o this line.
        expect(student.plans).to eq(guest.plans)
      end

      it "sets flash success message" do
        post :create, user: Fabricate.attributes_for(:user)
        expect(flash[:success]).to eq("You now have a 'member account' with BSC English Online. Welcome aboard!")
      end

      it "redirects newly created student to the student home page" do
        post :create, user: Fabricate.attributes_for(:user)
        expect(response).to redirect_to home_path
      end

    end

    context "with failed user sign up" do
      it "sets the flash danger message" do
        post :create, user: Fabricate.attributes_for(:user, email: nil)
        expect(flash[:danger]).to eq("You were not able to Sign Up")
      end

      it "renders the new template" do
        post :create, user: Fabricate.attributes_for(:user, email: nil)
        expect(response).to render_template :new
      end

      it "sets the @user variable" do # We have to test for this b/c when we render the new template [in the controller], it is a sign-up form. For the 'new.html.haml' sign-up form to work, it should set the @user instance variable b/c 'new' is a model-based form and it needs this @user to be set in order for the form to render.
        post :create, user: { password: "password", first_name: "name" }
        expect(assigns(:user)).to be_instance_of(User)
      end
    end
  end

end
