json.array! @events do |event|

  json.id     event.id
  json.name   event.name
  json.month  event.month
  json.date   event.date
  json.notes  event.notes

end