json.array! @volunteers do |volunteer|

  json.id                     volunteer.id
  json.first_name             volunteer.first_name
  json.last_name              volunteer.last_name
  json.email                  volunteer.email
  json.skype_time_slots       volunteer.skype_time_slots
  json.skype_name             volunteer.skype_name
  json.number_of_slots        volunteer.number_of_slots
  json.password_digest        volunteer.password_digest
  json.address_1              volunteer.address_1
  json.address_2              volunteer.address_2
  json.organization           volunteer.organization
  json.city                   volunteer.city
  json.province               volunteer.province
  json.postal_code            volunteer.postal_code
  json.country                volunteer.country
  json.phone_number           volunteer.phone_number
  json.age                    volunteer.age
  json.gender                 volunteer.gender
  json.pin                    volunteer.pin
  json.role                   volunteer.role

end



