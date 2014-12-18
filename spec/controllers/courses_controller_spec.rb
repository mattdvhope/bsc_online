require 'rails_helper'

describe CoursesController do

  describe "GET show" do
    it "sets @course" do
      curriculum = Fabricate(:curriculum)
      course = Fabricate(:course)
      get :show, curriculum_id: curriculum.id, id: course.id 
      expect(assigns(:course)).to eq(course)
    end
  end

end
