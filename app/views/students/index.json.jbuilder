json.array! @students do |student|

  json.id                     student.id
  json.nickname               student.nickname
  json.first_name             student.first_name
  json.last_name              student.last_name
  json.gender                 student.gender
  json.age                    student.age
  json.phone_number           student.phone_number
  json.email                  student.email
  json.skype_name             student.skype_name
  json.facebook               student.facebook
  json.line                   student.line
  json.date_format            student.date_format
  json.class_period           student.class_period

end



