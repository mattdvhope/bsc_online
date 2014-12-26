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

end
