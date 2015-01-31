Fabricator(:assessment) do
  course_id 1
  part_id 1
  lesson_id 1
  content { Faker::Company.bs.capitalize + "." }
  audio "Audio"
  score 90
  passed? true
  type_of "Exam"
  course { Fabricate(:course) }
end