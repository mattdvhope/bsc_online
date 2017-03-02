class VolunteersAvailableController < ApplicationController

  before_action :require_user

  def index
    volunteers = User.where("users.role = ? OR users.role = ?", "admin", "volunteer")

    vols_with_any_slots = [] #eliminate volunteers w/o slots
    volunteers.each do |vol|
      if vol.skype_time_slots.any? 
        vols_with_any_slots.push(vol)
      end
    end

    avail_vols = [] #eliminate volunteers w/ one slot filled
    vols_with_any_slots.each do |vol|
      unless vol.skype_time_slots.any?{|slot| slot.available == false && slot.student_id != current_user.id}
        avail_vols.push(vol)
      end
    end

    @volunteers = avail_vols

  end

  def show # available skype time slots of each volunteer
    slots = SkypeTimeSlot.where("skype_time_slots.volunteer_id = ?", params[:id])
    @skype_time_slots = slots.where("skype_time_slots.available = ? OR skype_time_slots.student_id = ?", true, current_user.id)
  end

end