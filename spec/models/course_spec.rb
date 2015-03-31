require 'rails_helper'

describe Course do

  it { should belong_to(:curriculum) }
  it { should have_many(:parts) }
  it { should have_many(:lessons).through(:parts) }
  it { should have_many(:assessments) }

  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:description) } 
  it { should validate_presence_of(:curriculum_id) }
  it { should validate_uniqueness_of(:name) }
  it { should validate_uniqueness_of(:description) }

  it "#activated? is true when activated" do
    course = Fabricate(:course, activated: true)
    course.save
    expect(course.activated?).to eq(true)
  end

  it "#activated? is false when not activated" do
    course = Fabricate(:course)
    course.save
    expect(course.activated?).to eq(false)
  end

end