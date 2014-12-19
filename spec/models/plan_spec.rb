require 'rails_helper'

describe Plan do

  it { should belong_to(:curriculum) }
  it { should belong_to(:student).class_name('User') }

end
