require 'rails_helper'

describe Question do

  it { should belong_to(:assessment) }
  it { should have_many(:answers) }

end
