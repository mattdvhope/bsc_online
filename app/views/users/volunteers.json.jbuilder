json.array! @volunteers do |volunteer|

  json.id                     volunteer.id
  json.first_name             volunteer.first_name
  json.last_name              volunteer.last_name
  json.age                    volunteer.age
  json.gender                 volunteer.gender
  json.email                  volunteer.email
  json.password_digest        volunteer.password_digest
  json.phone_number           volunteer.phone_number
  json.address_1              volunteer.address_1
  json.address_2              volunteer.address_2
  json.city                   volunteer.city
  json.province               volunteer.province
  json.postal_code            volunteer.postal_code
  json.country                volunteer.country
  json.pin                    volunteer.pin

end



