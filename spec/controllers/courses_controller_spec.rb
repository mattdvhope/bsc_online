require 'rails_helper'

describe CoursesController do

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
    it "sets @course" do
      course = Fabricate(:course)
      get :show, id: course.id
      expect(assigns(:course)).to eq(course)
    end
  end

end
