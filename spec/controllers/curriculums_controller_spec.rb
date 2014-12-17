require 'rails_helper'

describe CurriculumsController do

  describe "GET index" do
    it "sets the @curriculums all the curriculums" do
      curriculum1 = Fabricate(:curriculum)
      curriculum2 = Fabricate(:curriculum)
      curriculums = [curriculum1, curriculum2]
      get :index
      expect(assigns(:curriculums)).to match_array(curriculums)
    end
  end

  describe "GET show" do
    it "sets @curriculum" do
      curriculum = Fabricate(:curriculum)
      get :show, id: curriculum.id
      expect(assigns(:curriculum)).to eq(curriculum)
    end
  end

end
