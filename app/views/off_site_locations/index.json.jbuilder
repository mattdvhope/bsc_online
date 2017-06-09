json.array! @off_site_locations do |off_site_location|

  json.id                    off_site_location.id
  json.location_english      off_site_location.location_english
  json.location_thai         off_site_location.location_thai
  json.completed             off_site_location.completed
  json.users                 off_site_location.users

end



