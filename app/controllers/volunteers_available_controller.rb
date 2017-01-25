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

    avail_vols = [] #eliminate volunteers w/ slots all filled
    vols_with_any_slots.each do |vol|
      vol.skype_time_slots.each do |slot|
        avail_vols.push(vol) if slot.available == true
      end
    end

    @volunteers = avail_vols

  end

end