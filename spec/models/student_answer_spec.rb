require 'rails_helper'

describe StudentAnswer do

  it { should belong_to(:student).class_name('User') }
  it { should belong_to(:answer) }

end
