require 'rails_helper'

describe Practice do

  it { should belong_to(:lesson) }
  it { should have_many(:practice_vocabularies) }
  it { should have_many(:practice_phrases) }
  it { should have_many(:practice_sentences) }

end
