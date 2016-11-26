require 'rails_helper'

describe Part do

  it { should belong_to(:course) }
  it { should have_many(:lessons) }
  it { should have_many(:assessments) }

  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:course_id) }
  it { should validate_uniqueness_of(:name) }

end