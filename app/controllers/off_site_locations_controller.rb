class OffSiteLocationsController < ApplicationController

  def index
    @off_site_locations = OffSiteLocation.all
  end

  def create
    off_site_location = OffSiteLocation.new(off_site_location_params)
    if off_site_location.save
      flash[:success] = "You have created a new off site location."
      render json: nil, status: :ok
    else
      flash[:danger] = "You were not able to create a new off site location. Please ask for help from the CEP web app developer."
      render :json => { :errors => off_site_location.errors.full_messages }, :status => 422
    end
  end

  def update  
    off_site_location = OffSiteLocation.find(params[:id])
    off_site_location.completed = true

    if off_site_location.save
      flash[:warning] = "This off-site location class is completed & will be archived."
      render json: nil, status: :ok
    else
      flash[:danger] = "You were not able to archive this off-site location. Please ask for help from the CEP web app developer."
      render :json => { :errors => off_site_location.errors.full_messages }, :status => 422
    end
  end

  private

  def off_site_location_params
    params.require(:off_site_location).permit(:location_english, :location_thai, :completed)
  end

end
