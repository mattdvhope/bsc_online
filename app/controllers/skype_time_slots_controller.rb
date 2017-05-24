class SkypeTimeSlotsController < ApplicationController

  before_action :require_user

  def index
    @skype_time_slots = SkypeTimeSlot.where(volunteer_id: current_user.id)
  end

  def show
    @skype_time_slot = SkypeTimeSlot.find(params[:id])
  end

  def create
    @skype_time_slot = SkypeTimeSlot.new(skype_time_slot_params)
    if @skype_time_slot.save
      render "show"
    else
      render :json => { :errors => @skype_time_slot.errors.full_messages }, :status => 422
    end
  end

  def update
    @skype_time_slot = SkypeTimeSlot.find(params[:id])
    if @skype_time_slot.update(student_id: params[:student_id], available: params[:available], date_chosen: params[:date_chosen], month_chosen: params[:month_chosen], year_chosen: params[:year_chosen])
      volunteer = User.find(@skype_time_slot.volunteer_id)
      ActionCable.server.broadcast 'volunteer_removal',
        student_id: current_user.id,
        volunteer_id: @skype_time_slot.volunteer_id,
        available: params[:available],
        vol_first_name: volunteer.first_name,
        vol_last_name: volunteer.last_name,
        vol_gender: volunteer.gender,
        vol_age: volunteer.age,
        vol_province: volunteer.province,
        vol_slot_num: volunteer.skype_time_slots.count,
        vol_slots: volunteer.skype_time_slots
      render "show"
    else
      render :json => { :errors => @skype_time_slot.errors.full_messages }, :status => 422
    end
  end

  def destroy
    skype_time_slot = SkypeTimeSlot.find(params[:id])
    skype_time_slot.destroy
    render "index"
  end

  private

    def skype_time_slot_params
      params.require(:skype_time_slot).permit(:volunteer_id, :student_id, :day, :day_thai, :time_period, :time_thai, :am_pm, :available, :orderday, :ordertime, :orderam, :date_chosen, :month_chosen, :year_chosen)
    end

end
