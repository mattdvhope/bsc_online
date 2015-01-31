require 'rails_helper'

describe Question do

  it { should belong_to(:assessment) }
  it { should have_many(:answers).dependent(:destroy) }
  it { should have_many(:choices).through(:answers) }

  it { should accept_nested_attributes_for :answers }

  anaf_for_answers = Question.nested_attributes_options[:answers]
  it { expect(anaf_for_answers[:reject_if].call({ "answer_content" => "" })).to eq(true) }

end
