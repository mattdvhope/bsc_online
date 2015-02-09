require 'rails_helper'

describe CurriculumsController do

  describe "GET index" do

    it "sets @curriculums to all the curriculums" do
      curriculum1 = Fabricate(:curriculum)
      curriculum2 = Fabricate(:curriculum)
      curriculums = [curriculum1, curriculum2]
      get :index
      expect(assigns(:curriculums)).to match_array(curriculums)
    end

  end

  describe "GET show" do

    it "sets the @curriculum to the selected curriculum" do
      curriculum = Fabricate(:curriculum)
      get :show, id: curriculum.id
      expect(assigns(:curriculum)).to be_instance_of Curriculum
      expect(assigns(:curriculum)).to eq(curriculum)
    end

  end

end
