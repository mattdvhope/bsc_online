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
    if @skype_time_slot.update(student_id: params[:student_id], available: params[:available])

      if params[:available] == false
        ActionCable.server.broadcast 'volunteer_removal', # 'messages' is the name of the channel to which we are broadcasting
          student_id: current_user.id,
          volunteer_id: @skype_time_slot.volunteer_id
      elsif params[:available] == true
        
      end

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
      params.require(:skype_time_slot).permit(:volunteer_id, :student_id, :day, :day_thai, :time_period, :time_thai, :am_pm, :available, :orderday, :ordertime, :orderam)
    end

end
