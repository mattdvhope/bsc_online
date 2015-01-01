class SessionsController < ApplicationController

  def new
    redirect_to home_path if current_user
  end

  def create
    user = User.where(email: params[:email]).first
    if user && user.authenticate(params[:password]) # The 'authenticate' method is given to us by the Rails 'has_secure_password' in user.rb
      session[:user_id] = user.id
      flash[:success] = "You are logged in #{user.first_name} #{user.last_name}, enjoy!"
      redirect_to home_path 
    else
      flash[:danger] = "Invalid email or password."
      redirect_to log_in_path
    end
  end

  def destroy
    current_user.delete_guest_user_and_dependent_plans
    session[:user_id] = nil
    flash[:success] = "You are logged out. Have a great day!"
    redirect_to root_path
  end

end
