class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception

  rescue_from ActiveRecord::RecordNotFound, :with => :not_found_render_404
  # rescue_from ActionController::InvalidAuthenticityToken, :with => :invalid_authenticity
  rescue_from NoMethodError, :with => :guest_timed_out

  def require_leader
    redirect_to root_path unless current_user.leader?
  end

  def require_user
    destroy_guest_if_timed_out
    redirect_to root_path unless current_user
  end

  def current_user
    User.find(session[:user_id]) if session[:user_id]
  end

  helper_method :current_user # This makes the 'current_user' method available in the views.

  def destroy_old_admin_applicants
    old_applicants = User.where(role: "admin_applicant")
    old_applicants.each do |applicant|
      if Time.now - applicant.created_at > 604800 # destroyed after one week (7 days)... 604800 seconds
        applicant.destroy
      end 
    end
  end

  private

    def not_found_render_404
      session[:user_id] = nil
      flash[:danger] = "Your 'Guest status' has timed out (or 404)."
      redirect_to :back
    end

    def invalid_authenticity
      flash[:danger] = "Invalid Authenticity"
      redirect_to :back
    end

    def guest_timed_out
      flash[:danger] = "Your Guest Status timed out after one hour. Feel free to visit again as a guest!"
      redirect_to root_path
    end

    def destroy_guest_if_timed_out # in 'require_user' method
      if current_user
        if current_user.guest?
          if current_user.guest_session_time_limit_expired?
            current_user.destroy
          end
        end
      end
    end

    def clear_out_extra_guests_from_app
      clear_out_expired_guests_from_app
      delete_glut_of_guests            
    end

    def clear_out_expired_guests_from_app
      User.where(guest: true).each do |user|
        user.destroy if user.guest_session_time_limit_expired?
      end
    end

    def delete_glut_of_guests
      guests_in_app_now = User.where(guest: true)
      if guests_in_app_now.count > 100
        guests_in_app_now.first.destroy
      end
    end

end
