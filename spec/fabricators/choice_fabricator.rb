Fabricator(:choice) do
  answer_id 1
  student_id 1
  selected false
  answer { Fabricate(:answer) }
end