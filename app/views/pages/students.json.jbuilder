json.array! @students do |student|

  json.id                     student.id
  json.nickname               student.nickname
  json.first_name             student.first_name
  json.last_name              student.last_name
  json.gender                 student.gender
  json.phone_number           student.phone_number
  json.email                  student.email
  json.district               student.district
  json.payment_option         student.payment_option
  json.class_period           student.class_period

end



