class SkypeTimeSlotsOpeningsController < ApplicationController

  before_action :require_user

  def index
    @skype_time_slots = SkypeTimeSlot.where("skype_time_slots.available = ? OR skype_time_slots.student_id = ?", true, current_user.id)
  end

end