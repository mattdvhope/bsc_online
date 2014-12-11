class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def require_user
    redirect_to sign_in_path unless current_user
  end

  def current_user
    User.find(session[:user_id]) if session[:user_id] # Need this conditional to protect from a 'nil' error.
  end

  helper_method :current_user # This makes the 'current_user' method available in the views.

end
