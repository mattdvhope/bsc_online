Fabricator(:assessment) do
  course_id 1
  part_id 1
  lesson_id 1
  content "Assessment content"
  audio "Audio"
  score 90
  passed? true
  type_of "Exam"
end