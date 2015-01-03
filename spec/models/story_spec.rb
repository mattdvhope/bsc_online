require 'rails_helper'

describe Story do

  it { should belong_to(:lesson) }
  it { should have_many(:text_hundred_thais) }
  it { should have_many(:text_english_seventy_thais) }
  it { should have_many(:text_english_fifty_thais) }
  it { should have_many(:text_english_twenty_thais) }
  it { should have_many(:text_english_zero_thais) }

end
