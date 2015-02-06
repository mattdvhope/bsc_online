Fabricator(:plan) do
  curriculum_id 1
  student_id 1
  description { Faker::Company.catch_phrase }
end