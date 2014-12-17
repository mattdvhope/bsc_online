require 'rails_helper'

describe UsersController do

  describe "GET new" do
    it "sets the @user instance variable" do
      get :new
      expect(assigns(:user)).to be_instance_of(User)
    end
  end

  describe "POST create" do

    context "successful user sign up" do
      it "redirects to the Sign In page" do
        post :create, user: Fabricate.attributes_for(:user)
        expect(response).to redirect_to sign_in_path
      end
    end

    context "failed user sign up" do
      it "sets the flash danger message" do
        post :create, user: Fabricate.attributes_for(:user, email: nil)
        expect(flash[:danger]).to eq("You were not able to Register")
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
