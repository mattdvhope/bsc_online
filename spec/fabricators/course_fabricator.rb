Fabricator(:course) do
  curriculum_id 1
  name { Faker::Lorem.word.capitalize }
  description { Faker::Company.bs.capitalize }
  activated false
  curriculum { Fabricate(:curriculum) }
end