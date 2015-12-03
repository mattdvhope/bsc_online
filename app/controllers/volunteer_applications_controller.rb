class VolunteerApplicationsController < ApplicationController

  def edit
    @volunteer_application = VolunteerApplication.find(params[:id])
  end

  def update # fill in the guts!! ...& find a better redirect_to!! :-)
    redirect_to volunteer_intro_path
  end

end