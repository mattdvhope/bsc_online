require 'rails_helper'

describe Curriculum do

  it { should have_many(:courses) }
  it { should have_many(:syllabuses) }
  it { should have_many(:students) }

end
