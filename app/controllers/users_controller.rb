class UsersController < ApplicationController

  before_action :require_user, only: [:show]

  def new
    @user = User.new
    @courses = Course.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:success] = "You are now signed up as a member with an account. Please sign in."
      redirect_to log_in_path
    else
      flash[:danger] = "You were not able to Sign Up"
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :postal_code)
  end

end
