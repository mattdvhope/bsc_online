require 'rails_helper'

describe CourseRegistrationsController do

  describe "GET new" do
    it_behaves_like "requires log in" do
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
      set_current_user
      curriculum1 = Fabricate(:curriculum)
      curriculum2 = Fabricate(:curriculum)
      get :index
      expect(assigns(:curriculums)).to eq([curriculum1, curriculum2])
    end
  end

end
