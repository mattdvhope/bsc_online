class ApplicationController < ActionController::Base

  protect_from_forgery with: :null_session, only: Proc.new { |c| c.request.format.json? }

  def require_leader
    redirect_to root_path unless current_user && current_user.leader?
  end

  def require_user
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

end
