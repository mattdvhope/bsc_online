require 'rails_helper'

describe Conversation do

  it { should belong_to(:lesson) }
  it { should have_many(:conversation_hundred_thais) }
  it { should have_many(:conversation_english_fifty_thais) }
  it { should have_many(:conversation_english_zero_thais) }

end
