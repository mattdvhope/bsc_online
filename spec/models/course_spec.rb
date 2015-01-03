require 'rails_helper'

describe Course do

  it { should belong_to(:curriculum) }
  it { should have_many(:parts) }
  it { should have_many(:assessments) }

  it "saves itself when activated" do
    course = Fabricate(:course, activated: true)
    course.save
    expect(Course.count).to eq(1)
  end

  it "saves itself when not activated" do
    course = Fabricate(:course)
    course.save
    expect(Course.count).to eq(1)
  end

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