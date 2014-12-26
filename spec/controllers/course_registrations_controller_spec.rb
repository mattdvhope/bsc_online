require 'rails_helper'

describe CourseRegistrationsController do

  describe "GET new" do
    it_behaves_like "requires sign in" do
      let(:action) { get :new }
    end

    it "renders template of courses available for registering" do
      set_current_user
      get :new
      expect(response).to render_template :new
    end
  end

  describe "GET index" do
    it "sets the @curriculums all the curriculums" do
      curriculum1 = Fabricate(:curriculum)
      curriculum2 = Fabricate(:curriculum)
      curriculums = [curriculum1, curriculum2]
      get :index
      expect(assigns(:curriculums)).to match_array(curriculums)
    end
  end

end
