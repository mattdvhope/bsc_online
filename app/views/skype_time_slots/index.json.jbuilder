json.array! @skype_time_slots do |skype_time_slot|

  json.id                 skype_time_slot.id
  json.volunteer_id       skype_time_slot.volunteer_id
  json.student_id         skype_time_slot.student_id
  json.day                skype_time_slot.day
  json.time_period        skype_time_slot.time_period
  json.am_pm              skype_time_slot.am_pm
  json.available          skype_time_slot.available

end