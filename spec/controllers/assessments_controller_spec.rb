require 'rails_helper'

describe AssessmentsController do

  describe "GET show" do
    it_behaves_like "requires log in" do # in spec/support/shared_examples.rb
      let(:action) { get :show, id: 3 } # We don't care what the id is here.
    end
    it "sets @user" do
      alice = Fabricate(:user)
      set_current_user(alice) # in spec/support/macros.rb ; NOTE: With this spec, we actually don't care who the current user is (we really don't need 'alice' & we can put the 'alice' variable-assignment below this line).
      get :show, id: alice.id
      expect(assigns(:user)).to eq(alice)
    end
  end

end
