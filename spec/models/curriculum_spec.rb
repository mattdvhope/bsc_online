require 'rails_helper'

describe Curriculum do

  it { should have_many(:users) }
  it { should have_many(:courses) }

end
