class SkypeTimeSlot < ActiveRecord::Base

  belongs_to :volunteer, :class_name => 'User'
  belongs_to :student, :class_name => 'User' # but 'student.skype_time_slots' is 'nil'
  # a 'slot' has access to both the 'volunteer' and the 'student' methods, but only 'volunteer' has access to the 'skype_time_slots' to bring up its slots, although you CAN 'push' slots into the empty enumerator of student's slots

end
