class SessionsController < ApplicationController

  def new
    redirect_to home_path if current_user
  end

  def create
    clear_out_extra_guests_from_app
    reset_session # see 'http://guides.rubyonrails.org/security.html#sessions' paragraph 2.8
    user = User.where(email: params[:email].downcase).first
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
    clear_out_extra_guests_from_app
    flash[:success] = current_user.guest? ? "Thank you for visiting as our Guest! Please stop by again!" : "You are logged out #{current_user.name}. Have a great day!" if current_user
    (current_user.destroy if current_user.guest?) if current_user # Second 'if' in case someone types '/log_out' -- won't get 'nil' error for current_user
    session[:user_id] = nil
    redirect_to root_path
  end

end
