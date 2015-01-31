require 'rails_helper'

describe Role do

  it { should belong_to(:overseer) }

end
