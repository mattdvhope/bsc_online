Fabricator(:assessment) do
  course_id 1
  part_id 1
  lesson_id 1
  content { Faker::Company.bs.capitalize + "." }
  audio "Audio"
  score 90
  passed? true
  type_of "Test"
  course { Fabricate(:course) }
end