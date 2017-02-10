class SkypeTimeSlot < ActiveRecord::Base

  belongs_to :volunteer, :class_name => 'User'
  belongs_to :student, :class_name => 'User' # but 'student.skype_time_slots' is 'nil'
  # a 'slot' has access to both the 'volunteer' and the 'student' methods, but only 'volunteer' has access to the 'skype_time_slots' to bring up its slots, although you CAN 'push' slots into the empty enumerator of student's slots

  # def add_in_thai

  #   if DateTime.now.year == 2017
      
  #   end






  #   time_slot = self.time_period[/(\d{1,2}:00)/, 1] # '11:00'

  #   if self.am_pm == "PM EST"
  #     converted_time = time_slot.to_time + 12.hours
  #   else
  #     converted_time = time_slot.to_time
  #   end

  #   east_time = converted_time.in_time_zone("Eastern Time (US & Canada)")

  #   thai_time = east_time.in_time_zone("Bangkok")

  #   day_thai_in_english = thai_time.strftime("%A")

  #   self.day_thai = "วันอาทิตย์" if day_thai_in_english == "Sunday"

  #   self.day_thai = "วันจันทร์" if day_thai_in_english == "Monday"

  #   self.day_thai = "วันอังคาร" if day_thai_in_english == "Tuesday"
    
  #   self.day_thai = "วันพุธ" if day_thai_in_english == "Wednesday"
    
  #   self.day_thai = "วันพฤหัสบดี" if day_thai_in_english == "Thursday"
    
  #   self.day_thai = "วันศุกร์" if day_thai_in_english == "Friday"
    
  #   self.day_thai = "วันเสาร์" if day_thai_in_english == "Saturday"

  # end

end
