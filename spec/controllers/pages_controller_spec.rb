require 'rails_helper'

describe PagesController do

  describe "GET front" do

    it "redirects to home path if current user" do
      set_current_user
      get :front
      expect(response).to redirect_to home_path
    end

    it "render front page if not current user" do
      get :front
      expect(response).to render_template("front")
    end

    it "sets the @curriculums all the curriculums" do
      curriculum1 = Fabricate(:curriculum)
      curriculum2 = Fabricate(:curriculum)
      curriculums = [curriculum1, curriculum2]
      get :front
      expect(assigns(:curriculums)).to match_array(curriculums)
    end

  end

  describe "GET build" do

    it "renders build template if current user is an overseer" do
      set_current_overseer
      get :build
      expect(response).to render_template("build")
    end

    it "redirects to home path if current user is not an overseer" do
      set_current_user
      get :build
      expect(response).to redirect_to home_path
    end

    it "sets the @curriculums all the curriculums" do
      set_current_user # This is set b/c if it gets past the redirect_to in 'build', a current user will exist (unlike for the 'front' action).
      curriculum1 = Fabricate(:curriculum)
      curriculum2 = Fabricate(:curriculum)
      curriculums = [curriculum1, curriculum2]
      get :build
      expect(assigns(:curriculums)).to match_array(curriculums)
    end

  end

end
