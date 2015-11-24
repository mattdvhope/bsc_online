json.array! @users do |user|

  json.id                     user.id
  json.first_name             user.first_name
  json.last_name              user.last_name
  json.occupation             user.occupation
  json.email                  user.email
  json.password_digest        user.password_digest
  json.phone_number           user.phone_number
  json.address_1              user.address_1
  json.address_2              user.address_2
  json.city                   user.city
  json.province               user.province
  json.postal_code            user.postal_code
  json.country                user.country
  json.pin                    user.pin

end



