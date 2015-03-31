require 'rails_helper'

describe Admin::PartsController do

  describe "GET new" do

    it_behaves_like "requires overseer" do
      let(:action) { get :new }
    end

    it "sets @part" do
      set_current_overseer
      get :new
      expect(assigns(:part)).to be_instance_of Part
    end

  end

  describe "POST create" do

    context "with valid input" do

      it_behaves_like "requires overseer" do
        let(:action) { post :create }
      end

      before :each do
        set_current_overseer
        @attrs = Fabricate.attributes_for(:part)
      end

      it "creates an assessment" do
        post :create, part: @attrs
        expect(Part.count).to eq(1)
      end

      it "sets the flash success" do
        post :create, part: @attrs
        expect(flash[:success]).not_to be_blank
      end

      it "redirects back to build path" do
        post :create, part: @attrs
        part = Part.first
        expect(response).to redirect_to build_path
      end

    end

    context "with valid input" do

      before :each do
        set_current_overseer
        @attrs = Fabricate.attributes_for(:part, name: "")
      end

      it_behaves_like "requires overseer" do
        let(:action) { post :create }
      end

      it "sets the flash danger" do
        post :create, part: @attrs
        expect(flash[:danger]).not_to be_blank
      end

      it "redirects to new admin part path" do
        post :create, part: @attrs
        part = Part.first
        expect(response).to redirect_to new_admin_part_path
      end

    end

  end

  describe "GET edit" do

    it_behaves_like "requires overseer" do
      let(:action) { get :edit, { :id => 1 } }
    end

    it "sets @part for this part" do
      set_current_overseer
      part = Fabricate(:part)
      get :edit, { :id => part.id }
      expect(assigns(:part)).to be_instance_of Part
    end

  end

  describe "PATCH update" do

    context "with valid input" do

      it_behaves_like "requires overseer" do
        let(:action) { get :update, { :id => 1 } }
      end

      before :each do
        set_current_overseer
        @part = Fabricate(:part)
        @attrs = @part.attributes
      end

      it "located the requested @part" do
        patch :update, id: @part, part: @attrs
        expect(assigns(:part)).to be_instance_of Part
      end

      it "changes @part's attributes" do
        @attrs[:name] = "New name"
        patch :update, id: @part, part: @attrs
        @part.reload
        expect(@part.name).to eq "New name"
      end      

      it "sets the flash success" do
        @attrs[:name] = "New name"
        patch :update, id: @part, part: @attrs
        @part.reload
        expect(flash[:success]).not_to be_blank
      end

      it "redirects back to build" do
        @attrs[:name] = "New name"
        patch :update, id: @part, part: @attrs
        @part.reload
        expect(flash[:success]).to redirect_to build_path
      end

    end

    context "with invalid input" do

      it_behaves_like "requires overseer" do
        let(:action) { get :update, { :id => 1 } }
      end

      before :each do
        set_current_overseer
        @part = Fabricate(:part)
        @attrs = @part.attributes
      end

      it "sets the flash danger" do
        @attrs[:name] = nil
        patch :update, id: @part, part: @attrs
        @part.reload
        expect(flash[:danger]).not_to be_blank
      end

      it "redirects to the edit part path" do
        @attrs[:name] = nil
        patch :update, id: @part, part: @attrs
        @part.reload
        expect(response).to redirect_to edit_admin_part_path(@part)
      end

    end

  end

end