json.array! @leaders do |leader|

  json.id                     leader.id
  json.first_name             leader.first_name
  json.last_name              leader.last_name
  json.gender                 leader.gender
  json.phone_number           leader.phone_number
  json.email                  leader.email
  json.role                   leader.role

end