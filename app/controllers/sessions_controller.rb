class SessionsController < ApplicationController

  def log_in_student
    redirect_to root_path
  end

  def log_in_teacher
    redirect_to root_path
  end

  def create
    destroy_old_admin_applicants
    reset_session # see 'http://guides.rubyonrails.org/security.html#sessions' paragraph 2.8 
    user = User.where(email: params[:email].downcase).first
    if user && user.authenticate(params[:password]) # The 'authenticate' method is given to us by the Rails 'has_secure_password' in user.rb
      session[:user_id] = user.id
      flash[:success] = "You are logged in #{user.first_name} #{user.last_name}, enjoy!"
      if user.role
        redirect_to home_path
      else
        redirect_to curriculums_path
      end
    else
      flash[:danger] = "Invalid email or password."
      redirect_to root_path
    end
  end

  def destroy
    if current_user.pin != "000000" && current_user.role == "student"
      current_user.update_attribute(:pin, "000000")
    end
    flash[:success] = current_user.guest? ? "Thank you for visiting, #{current_user.first_name}! Please look in your email inbox for your 'Volunteer Administrator Application' form." : "You are logged out #{current_user.first_name}. Have a great day!" if current_user
    session[:user_id] = nil
    redirect_to root_path
  end

end
