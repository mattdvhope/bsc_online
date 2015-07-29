class EventsController < ApplicationController

  respond_to :html
  respond_to :json

  def index
    respond_with Event.all  # GET /events
  end

  def new
    respond_with Event.new
  end

  def create
    respond_with Event.create(event_params)  # POST /events
  end

  private

    def event_params
      params.require(:event).permit(:name, :month, :date, :notes)
    end

end
