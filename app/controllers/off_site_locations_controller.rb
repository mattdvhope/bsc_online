class OffSiteLocationsController < ApplicationController

  def index
    @off_site_locations = OffSiteLocation.all
  end

  def create
    off_site_location = OffSiteLocation.new(off_site_location_params)
    if off_site_location.save
      flash[:success] = "You have created a new off site location."
      redirect_to dashboard_path
    else
      flash[:danger] = "You were not able to create a new off site location. Please ask for help from the CEP web app developer."
      redirect_to dashboard_path
    end
  end

  def update  
    off_site_location = OffSiteLocation.find(params[:id])
    off_site_location.completed = true

    if off_site_location.save
      flash[:warning] = "This off-site location class is completed & will be archived."
      redirect_to dashboard_path
    else
      flash[:danger] = "You were not able to archive this off-site location. Please ask for help from the CEP web app developer."
      redirect_to dashboard_path
    end
  end

  private

  def off_site_location_params
    params.require(:off_site_location).permit(:location_english, :location_thai, :completed)
  end

end
