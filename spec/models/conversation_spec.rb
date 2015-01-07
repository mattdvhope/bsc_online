require 'rails_helper'

describe Conversation do

  it { should belong_to(:lesson) }

end
