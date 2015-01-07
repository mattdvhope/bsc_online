require 'rails_helper'

describe SessionsController do

  describe "GET new" do

    it "renders the new template for unauthenticated users" do
      get :new
      expect(response).to render_template :new
    end

    it "redirects to home path/page if the user is authenticated" do
      set_current_user
      get :new
      expect(response).to redirect_to home_path
    end
    
  end

  describe "POST create" do

    context "user able to log in / valid credentials" do
      before {
        alice = Fabricate(:user)
        post :create, email: alice.email, password: alice.password
      }
      it "puts the logged in user in the session" do
        alice = Fabricate(:user)
        post :create, email: alice.email, password: alice.password
        expect(session[:user_id]).to eq(alice.id)
      end
      it "redirects to the home_path" do
        expect(response).to redirect_to home_path
      end
      it "sets the flash success" do
        expect(flash[:success]).not_to be_blank # We expect "something" to be there with a flash notice.
      end
    end

    context "user unable to log in / invalid credentials" do
      before do
        alice = Fabricate(:user)
        post :create, email: alice.email, password: alice.password + 'zcvzx' # Makes password invalid.
      end
      it "does not put the logged in user in the session" do
        expect(session[:user_id]).to be_nil # More specific than 'be_blank'
      end
      it "redirects to the log in path / page" do
        expect(response).to redirect_to log_in_path
      end
      it "sets the flash[:danger] message" do
        expect(flash[:danger]).not_to be_blank
      end
    end

  end

  describe "GET destroy" do

    before do
      # session[:user_id] = Fabricate(:user).id
      set_current_user
      get :destroy
    end

    it "clears the session for the user" do
      expect(session[:user_id]).to be_nil
    end

    it "sets the flash success" do
      expect(flash[:success]).to eq("You are logged out. Have a great day!")
    end

    it "redirects to to the root path" do
      expect(response).to redirect_to root_path
    end

  end

end
