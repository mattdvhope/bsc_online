require 'rails_helper'

describe Plan do

  it { should belong_to(:curriculum) }
  it { should belong_to(:student).class_name('User') }

  it { should validate_presence_of(:curriculum_id) }
  it { should validate_presence_of(:student_id) }
  it { should validate_presence_of(:description) }

end
