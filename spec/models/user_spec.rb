require 'rails_helper'

describe User do

  it "should downcase email before save" do
    alice = Fabricate(:user, email: "CAPITAL@test.com")
    expect(alice.email).to eq("capital@test.com")
    alice.save
  end

  it { should have_many(:plans) }
  it { should have_many(:curriculums) }
  it { should have_many(:user_answers) }
  it { should validate_presence_of(:first_name) }
  it { should validate_presence_of(:last_name) }
  it { should validate_presence_of(:email) }
  it { should validate_uniqueness_of(:email) }
  it { should validate_presence_of(:password) }
  it { should validate_presence_of(:password_confirmation) }
  it { should validate_presence_of(:postal_code) }

  describe ".new_guest" do
    it "returns a new guest user object" do
      user = User.new
      user.guest = true
      expect(:user).to be_present
    end
  end

  describe "#name" do
    it "returns 'Guest Student' if guest" do
      user = User.new
      user.guest = true
      expect(user.name).to eq("Guest Student")
    end
  end

  describe "#delete_guest_user_and_dependent_plans" do
    it "destroys guest user plans" do
      user = User.new
      user.guest = true
      plan = Plan.create(curriculum_id: 1, student_id: user.id, description: "Great courses!")
      user.plans = [plan]
      user.save
      user.delete_guest_user_and_dependent_plans
      expect(user.plans).not_to exist
    end

    it "destroys guest user" do
      user = User.new
      user.guest = true
      plan = Plan.create(curriculum_id: 1, student_id: user.id, description: "Great courses!")
      user.plans = [plan]
      user.save
      user.delete_guest_user_and_dependent_plans
      expect(User.count).to eq(0)
    end

  end

end
