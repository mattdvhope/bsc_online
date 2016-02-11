class AdminsController < ApplicationController

  before_action :require_user
  before_action :require_admin # In the rails (heroku?) console, choose who has the various roles, including 'Admin' (a string 'name' attribute in the 'roles' table which belongs to overseer/user).

private

  def require_admin
    if !current_user.leader? # In the future, I might have '#overseer_leader', etc, etc types of 'overseers'.
      flash[:danger] = "You are not authorized to do that."
      redirect_to home_path
    end
  end

end
