require 'rails_helper'

describe Admin::CoursesController do

  describe "GET new" do

    it_behaves_like "requires overseer" do
      let(:action) { get :new }
    end

    it "sets @course" do
      set_current_overseer
      get :new
      expect(assigns(:course)).to be_instance_of Course
    end

  end

  describe "POST create" do

    context "with valid input" do

      it_behaves_like "requires overseer" do
        let(:action) { post :create }
      end

      before :each do
        set_current_overseer
        @attrs = Fabricate.attributes_for(:course)
      end

      it "creates an assessment" do
        post :create, course: @attrs
        expect(Course.count).to eq(1)
      end

      it "sets the flash success" do
        post :create, course: @attrs
        expect(flash[:success]).not_to be_blank
      end

      it "redirects back to build path" do
        post :create, course: @attrs
        course = Course.first
        expect(response).to redirect_to build_path
      end

    end

    context "with valid input" do

      before :each do
        set_current_overseer
        @attrs = Fabricate.attributes_for(:course, name: "")
      end

      it_behaves_like "requires overseer" do
        let(:action) { post :create }
      end

      it "sets the flash danger" do
        post :create, course: @attrs
        expect(flash[:danger]).not_to be_blank
      end

      it "redirects to new admin course path" do
        post :create, course: @attrs
        course = Course.first
        expect(response).to redirect_to new_admin_course_path
      end

    end

  end

  describe "GET edit" do

    it_behaves_like "requires overseer" do
      let(:action) { get :edit, { :id => 1 } }
    end

    it "sets @course for this course" do
      set_current_overseer
      course = Fabricate(:course)
      get :edit, { :id => course.id }
      expect(assigns(:course)).to be_instance_of Course
    end

  end

  describe "PATCH update" do

    context "with valid input" do

      it_behaves_like "requires overseer" do
        let(:action) { get :update, { :id => 1 } }
      end

      before :each do
        set_current_overseer
        @course = Fabricate(:course)
        @attrs = @course.attributes
      end

      it "located the requested @course" do
        patch :update, id: @course, course: @attrs
        expect(assigns(:course)).to be_instance_of Course
      end

      it "changes @course's attributes" do
        @attrs[:name] = "New name"
        patch :update, id: @course, course: @attrs
        @course.reload
        expect(@course.name).to eq "New name"
      end      

      it "sets the flash success" do
        @attrs[:name] = "New name"
        patch :update, id: @course, course: @attrs
        @course.reload
        expect(flash[:success]).not_to be_blank
      end

      it "redirects back to build" do
        @attrs[:name] = "New name"
        patch :update, id: @course, course: @attrs
        @course.reload
        expect(flash[:success]).to redirect_to build_path
      end

    end

    context "with invalid input" do

      it_behaves_like "requires overseer" do
        let(:action) { get :update, { :id => 1 } }
      end

      before :each do
        set_current_overseer
        @course = Fabricate(:course)
        @attrs = @course.attributes
      end

      it "does not change @course's attributes" do
        @attrs[:name] = nil
        @attrs[:description] = "New description"
        patch :update, id: @course, course: @attrs
        @course.reload
        expect(@course.description).to_not eq "New description"
      end      

      it "sets the flash danger" do
        @attrs[:name] = nil
        @attrs[:description] = "New description"
        patch :update, id: @course, course: @attrs
        @course.reload
        expect(flash[:danger]).not_to be_blank
      end

      it "redirects to the edit course path" do
        @attrs[:name] = nil
        @attrs[:description] = "New description"
        patch :update, id: @course, course: @attrs
        @course.reload
        expect(response).to redirect_to edit_admin_course_path(@course)
      end

    end

  end

end