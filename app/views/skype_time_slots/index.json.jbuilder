json.array! @skype_time_slots do |skype_time_slot|

  json.id                 skype_time_slot.id
  json.user_id            skype_time_slot.user_id
  json.day                skype_time_slot.day
  json.time_period        skype_time_slot.time_period
  json.am_pm              skype_time_slot.am_pm
  json.available          skype_time_slot.available

end