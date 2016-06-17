json.array! @students do |student|

  json.id                       student.id
  json.pin                      student.pin
  json.nickname                 student.nickname
  json.first_name               student.first_name
  json.last_name                student.last_name
  json.age                      student.age
  json.gender                   student.gender
  json.email                    student.email
  json.password_digest          student.password_digest
  json.phone_number             student.phone_number
  json.province                 student.district
  json.country                  student.country
  json.class_time_id            student.class_time_id
  json.class_period             student.class_period
  json.date_format              student.date_format

end



