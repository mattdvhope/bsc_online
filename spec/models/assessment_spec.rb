require 'rails_helper'

describe Assessment do

  it { should belong_to(:course) }
  it { should belong_to(:part) }
  it { should belong_to(:lesson) }
  it { should have_many(:questions) }

end
