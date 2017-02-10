json.array! @skype_time_slots do |skype_time_slot|

  json.id                 skype_time_slot.id
  json.volunteer_id       skype_time_slot.volunteer_id
  json.student_id         skype_time_slot.student_id
  json.day                skype_time_slot.day
  json.day_thai           skype_time_slot.day_thai
  json.time_period        skype_time_slot.time_period
  json.time_thai          skype_time_slot.time_thai
  json.am_pm              skype_time_slot.am_pm
  json.available          skype_time_slot.available
  json.orderday           skype_time_slot.orderday
  json.ordertime          skype_time_slot.ordertime
  json.orderam            skype_time_slot.orderam

end