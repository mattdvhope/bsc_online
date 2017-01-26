class SkypeTimeSlotsOpenController < ApplicationController

  before_action :require_user

  def index
    
    @skype_time_slots = SkypeTimeSlot.where(volunteer_id: current_user.id)
  end

end