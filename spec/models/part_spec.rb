require 'rails_helper'

describe Part do

  it { should belong_to(:course) }
  it { should have_many(:lessons) }
  it { should have_many(:assessments) }

end
