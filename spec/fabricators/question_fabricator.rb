Fabricator(:question) do
  assessment_id 1
  question_content { Faker::Company.bs.capitalize + "?" }
  correct_answer_id 1
  assessment { Fabricate(:assessment) }
end