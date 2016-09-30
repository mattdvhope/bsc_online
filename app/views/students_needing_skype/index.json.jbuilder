json.array! @students do |student|

  json.id                     student.id
  json.first_name             student.first_name
  json.last_name              student.last_name
  json.email                  student.email
  json.password_digest        student.password_digest
  json.address_1              student.address_1
  json.address_2              student.address_2
  json.city                   student.city
  json.province               student.province
  json.postal_code            student.postal_code
  json.country                student.country
  json.phone_number           student.phone_number
  json.age                    student.age
  json.gender                 student.gender
  json.pin                    student.pin
  json.role                   student.role

end



