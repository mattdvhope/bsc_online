require 'rails_helper'

describe Syllabus do

  it { should belong_to(:curriculum) }
  it { should belong_to(:student) }

end
