class OffSiteLocationsController < ApplicationController

  def index
    @off_site_locations = OffSiteLocation.all
  end

end
