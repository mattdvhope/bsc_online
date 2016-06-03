json.array! @guest_students do |guest_student|

  json.id                     guest_student.id
  json.nickname               guest_student.nickname
  json.first_name             guest_student.first_name
  json.last_name              guest_student.last_name
  json.gender                 guest_student.gender
  json.phone_number           guest_student.phone_number
  json.email                  guest_student.email
  json.province               guest_student.province
  json.payment_option         guest_student.payment_option
  json.class_time             guest_student.class_time

end



