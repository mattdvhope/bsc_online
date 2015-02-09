require 'rails_helper'

describe PartsController do

  describe "GET show" do

    it "sets @part" do
      set_current_user
      part = Part.create(name: "Part 1")
      get :show, id: part.id
      expect(assigns(:part)).to be_instance_of Part
    end

  end


end
