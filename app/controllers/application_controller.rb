class ApplicationController < ActionController::Base

  protect_from_forgery with: :exception

  rescue_from ActiveRecord::RecordNotFound, :with => :not_found_render_404

  def require_user
    destroy_guest_if_timed_out
    redirect_to root_path unless current_user
  end

  def current_user
    User.find(session[:user_id]) if session[:user_id]
  end

  helper_method :current_user # This makes the 'current_user' method available in the views.

  private

    def not_found_render_404
      session[:user_id] = nil
      flash[:danger] = "Your 'Guest status' has timed out."
      redirect_to :back
    end

    def destroy_guest_if_timed_out
      if current_user
        if current_user.guest?
          if current_user.guest_session_time_limit_expired?
            current_user.destroy
          end
        end
      end
    end

end
