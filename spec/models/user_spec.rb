require 'rails_helper'

describe User do

  it "should downcase email before save" do
    alice = Fabricate(:user, email: "CAPITAL@test.com")
    expect(alice.email).to eq("capital@test.com")
    alice.save
  end

  it { should have_many(:plans).dependent(:destroy) }
  it { should have_many(:curriculums).through(:plans) }
  it { should have_many(:choices).dependent(:destroy) }
  it { should have_many(:roles).dependent(:destroy) }

  it { should validate_presence_of(:first_name) }
  it { should validate_presence_of(:last_name) }
  it { should validate_presence_of(:email) }
  it { should validate_uniqueness_of(:email) }
  it { should validate_presence_of(:password) }
  it { should ensure_length_of(:password).is_at_least(6) }
  it { should validate_presence_of(:password_confirmation) }
  it { should validate_presence_of(:postal_code) }
  it { should_not allow_value(1234).for(:postal_code) }
  it { should_not allow_value(123421).for(:postal_code) }
  it { should_not allow_value(97421).for(:postal_code) }

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

  describe "#admin?" do

    it "returns true if role name is Admin" do
      alice = Fabricate(:user)
      role = Role.create(name: "Admin", overseer_id: alice.id)
      alice.roles << role
      expect(alice.admin?).to eq(true)
    end

    it "returns false if role name is not Admin" do
      alice = Fabricate(:user)
      expect(alice.admin?).to eq(false)
    end

  end

end
