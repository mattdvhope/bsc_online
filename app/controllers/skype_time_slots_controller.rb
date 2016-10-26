class SkypeTimeSlotsController < ApplicationController

  before_action :require_user

  def index
    @skype_time_slots = SkypeTimeSlot.where(user_id: current_user.id)
  end

  def show
    @skype_time_slot = SkypeTimeSlot.find(params[:id])
  end

  def create
    @skype_time_slot = SkypeTimeSlot.new(skype_time_slot_params)
    if @skype_time_slot.save
      redirect_to dashboard_path
    else
      render :json => { :errors => @skype_time_slot.errors.full_messages }, :status => 422
    end
  end

  private

    def skype_time_slot_params
      params.require(:skype_time_slot).permit(:user_id, :day, :time_period, :am_pm)
    end

end