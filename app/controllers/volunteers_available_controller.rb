class VolunteersAvailableController < ApplicationController

  before_action :require_user

  def index
    @volunteers = User.where("users.role = ? OR users.role = ?", "admin", "volunteer")
  end

  def show
    @volunteer = User.find(params[:id])
  end

end