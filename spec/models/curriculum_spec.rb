require 'rails_helper'

describe Curriculum do

  it { should have_many(:courses) }
  it { should have_many(:plans) }
  it { should have_many(:students).through(:plans) }

end
