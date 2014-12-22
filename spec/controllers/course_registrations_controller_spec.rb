require 'rails_helper'

describe CourseRegistrationsController do

  describe "GET new" do
    it_behaves_like "requires sign in" do
      let(:action) { get :new }
    end

    it "renders course registration template for authenticated users" do
      set_current_user
      get :new
      expect(response).to render_template :new
    end

    # it "redirects to home path/page if the user is authenticated" do
    #   set_current_user
    #   get :new
    #   expect(response).to redirect_to home_path
    # end

  end

end
