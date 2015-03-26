require 'rails_helper'

describe Admin::CurriculumsController do

  describe "GET new" do

    it_behaves_like "requires overseer" do
      let(:action) { get :new }
    end

    it "sets @curriculum" do
      set_current_overseer
      get :new
      expect(assigns(:curriculum)).to be_instance_of Curriculum
    end

  end

  describe "POST create" do

    context "with valid input" do

      it_behaves_like "requires overseer" do
        let(:action) { post :create }
      end

      before :each do
        set_current_overseer
        @attrs = Fabricate.attributes_for(:curriculum)
      end

      it "creates an assessment" do
        post :create, curriculum: @attrs
        expect(Curriculum.count).to eq(1)
      end

      it "sets the flash success" do
        post :create, curriculum: @attrs
        expect(flash[:success]).not_to be_blank
      end

      it "redirects back to build path" do
        post :create, curriculum: @attrs
        curriculum = Curriculum.first
        expect(response).to redirect_to build_path
      end

    end

    context "with valid input" do

      before :each do
        set_current_overseer
        @attrs = Fabricate.attributes_for(:curriculum, name: "")
      end

      it_behaves_like "requires overseer" do
        let(:action) { post :create }
      end

      it "sets the flash danger" do
        post :create, curriculum: @attrs
        expect(flash[:danger]).not_to be_blank
      end

      it "redirects to new admin curriculum path" do
        post :create, curriculum: @attrs
        curriculum = Curriculum.first
        expect(response).to redirect_to new_admin_curriculum_path
      end

    end

  end

  describe "GET edit" do

    it_behaves_like "requires overseer" do
      let(:action) { get :edit, { :id => 1 } }
    end

    it "sets @curriculum for this curriculum" do
      set_current_overseer
      curriculum = Fabricate(:curriculum)
      get :edit, { :id => curriculum.id }
      expect(assigns(:curriculum)).to be_instance_of Curriculum
    end

  end

  describe "PATCH update" do

    context "with valid input" do

      it_behaves_like "requires overseer" do
        let(:action) { get :update, { :id => 1 } }
      end

      before :each do
        set_current_overseer
        @curriculum = Fabricate(:curriculum)
        @attrs = @curriculum.attributes
      end

      it "located the requested @curriculum" do
        patch :update, id: @curriculum, curriculum: @attrs
        expect(assigns(:curriculum)).to be_instance_of Curriculum
      end

      it "changes @curriculum's attributes" do
        @attrs[:name] = "New name"
        patch :update, id: @curriculum, curriculum: @attrs
        @curriculum.reload
        expect(@curriculum.name).to eq "New name"
      end      

      it "sets the flash success" do
        @attrs[:name] = "New name"
        patch :update, id: @curriculum, curriculum: @attrs
        @curriculum.reload
        expect(flash[:success]).not_to be_blank
      end

      it "redirects back to build" do
        @attrs[:name] = "New name"
        patch :update, id: @curriculum, curriculum: @attrs
        @curriculum.reload
        expect(flash[:success]).to redirect_to build_path
      end

    end

    context "with invalid input" do

      it_behaves_like "requires overseer" do
        let(:action) { get :update, { :id => 1 } }
      end

      before :each do
        set_current_overseer
        @curriculum = Fabricate(:curriculum)
        @attrs = @curriculum.attributes
      end

      it "does not change @curriculum's attributes" do
        @attrs[:name] = nil
        @attrs[:description] = "New description"
        patch :update, id: @curriculum, curriculum: @attrs
        @curriculum.reload
        expect(@curriculum.description).to_not eq "New description"
      end      

      it "sets the flash danger" do
        @attrs[:name] = nil
        @attrs[:description] = "New description"
        patch :update, id: @curriculum, curriculum: @attrs
        @curriculum.reload
        expect(flash[:danger]).not_to be_blank
      end

      it "redirects to the edit curriculum path" do
        @attrs[:name] = nil
        @attrs[:description] = "New description"
        patch :update, id: @curriculum, curriculum: @attrs
        @curriculum.reload
        expect(response).to redirect_to edit_admin_curriculum_path(@curriculum)
      end

    end

  end

end
