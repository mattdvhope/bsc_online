require 'rails_helper'

describe User do

  it "should downcase email before save" do
    alice = Fabricate(:user, email: "CAPITAL@test.com")
    expect(alice.email).to eq("capital@test.com")
    alice.save
  end

  it { should have_many(:plans) }
  it { should have_many(:curriculums) }
  it { should validate_presence_of(:first_name) }
  it { should validate_presence_of(:last_name) }
  it { should validate_presence_of(:email) }
  it { should validate_uniqueness_of(:email) }
  it { should validate_presence_of(:password) }
  it { should validate_presence_of(:password_confirmation) }
  it { should validate_presence_of(:postal_code) }

end
