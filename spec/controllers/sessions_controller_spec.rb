require 'rails_helper'

describe SessionsController do

  describe "GET #new" do

    it "renders the new template if not current user" do
      get :new
      expect(response).to render_template :new
    end

    it "redirects to home path/page if current user" do
      set_current_user
      get :new
      expect(response).to redirect_to home_path
    end
    
  end

  describe "POST #create" do

    it "clears out extra guests from app" do
      @alice = Fabricate(:user)
      guest1 = Fabricate(:guest, created_at: 2.hours.ago)
      guest2 = Fabricate(:guest, created_at: 2.hours.ago)
      guest3 = Fabricate(:guest, created_at: 59.minutes.ago)
      post :create, email: @alice.email, password: @alice.password
      expect(User.where(guest: true).count).to eq 1
    end

    context "user able to log in / valid credentials" do

      before {
        @alice = Fabricate(:user)
        post :create, email: @alice.email, password: @alice.password
      }

      it "puts the logged in user in the session" do
        post :create, email: @alice.email, password: @alice.password
        expect(session[:user_id]).to eq(@alice.id)
      end

      it "sets the flash success" do
        expect(flash[:success]).not_to be_blank
      end

      it "redirects to the home_path" do
        expect(response).to redirect_to home_path
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

      it "sets the flash[:danger] message" do
        expect(flash[:danger]).not_to be_blank
      end

      it "redirects to the log in path / page" do
        expect(response).to redirect_to log_in_path
      end

    end

  end

  describe "GET #destroy" do

    it "clears out extra guests from app" do
      guest1 = Fabricate(:guest, created_at: 2.hours.ago)
      guest2 = Fabricate(:guest, created_at: 2.hours.ago)
      guest3 = Fabricate(:guest, created_at: 59.minutes.ago)
      get :destroy
      expect(User.where(guest: true).count).to eq 1
    end

    context "Student is guest user" do

      it "sets the flash success" do
        guest = Fabricate(:guest)
        set_current_user(guest)
        get :destroy
        expect(flash[:success]).to eq "Thank you for visiting as our Guest! Please stop by again!"
      end

    end

    context "Student is long-term student" do

      it "sets the flash success" do
        non_guest = Fabricate(:user)
        set_current_user(non_guest)
        get :destroy
        expect(flash[:success]).to eq "You are logged out #{non_guest.name}. Have a great day!"
      end

    end

    it "clears the session for the user" do
      set_current_user
      get :destroy
      expect(session[:user_id]).to be_nil
    end

    it "redirects to to the root path" do
      set_current_user
      get :destroy
      expect(response).to redirect_to root_path
    end

  end

end
