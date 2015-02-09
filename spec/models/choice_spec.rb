require 'rails_helper'

describe Choice do

  it { should belong_to(:answer) }
  it { should have_one(:question).through(:answer) }
  it { should belong_to(:student).class_name('User') }

end
