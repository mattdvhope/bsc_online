require 'rails_helper'

describe Lesson do

  it { should belong_to(:part) }
  it { should have_many(:stories) }
  it { should have_many(:conversations) }
  it { should have_many(:practices) }
  it { should have_many(:assessments) }

end
