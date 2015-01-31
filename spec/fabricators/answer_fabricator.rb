Fabricator(:answer) do
  question_id 1
  answer_content { Faker::Company.bs.capitalize + "." }
  choice "Correct"
  correct true
  question { Fabricate(:question) }
end