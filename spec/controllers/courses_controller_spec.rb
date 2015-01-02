require 'rails_helper'

describe CoursesController do

  describe "GET show" do
    it "sets @course" do
      set_current_user
      course = Fabricate(:course)
      get :show, course: course
      expect(assigns(:course)).to eq(course)
    end
  end

end
