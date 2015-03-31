Fabricator(:part) do
  course_id 1
  name { Faker::Lorem.word.capitalize }
  completed? false
  course { Fabricate(:course) }
end