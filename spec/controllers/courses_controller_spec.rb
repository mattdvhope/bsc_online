require 'rails_helper'

describe CoursesController do

  describe "GET show" do

    it "sets @course" do
      set_current_user
      course = Fabricate(:course)
      get :show, id: course.id
      expect(assigns(:course)).to be_instance_of Course
    end

    it "renders show page if course.id is 1" do
      set_current_user
      course = Fabricate(:course, id: 1)
      get :show, id: course.id
      expect(response).to render_template("show")
    end

    it "renders under_construction page if course.id is not 1" do
      set_current_user
      course = Fabricate(:course, id: 2)
      get :show, id: course.id
      expect(response).to render_template("under_construction")
    end

  end

end
