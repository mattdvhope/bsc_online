class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = params.include?("user") ? User.new(user_params) : User.new_guest
    if @user.save
      if @user.first_name.blank?
        flash[:success] = "You are logged in as a temporary guest. Please be aware that any work you do while logged in as a 'temporary guest' will not be recorded after you have logged out. But if you decide to Join BSC English Online, all your work from this time will be retained."
      else
        @user.plans = current_user.plans # Guest user's plans transferred to created user before guest user is destroyed.
        current_user.destroy # guest user record destroyed
        flash[:success] = "You now have a 'member account' with BSC English Online. Welcome aboard!"
      end
      session[:user_id] = @user.id
      redirect_to root_path
    else
      flash[:danger] = "You were not able to Sign Up"
      render :new
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :postal_code, :address_1, :address_2, :city, :sub_district, :district, :province, :country, :phone_number, :age, :gender, :occupation, :university_name, :religion, :studied_english_before?, :studied_english_how_long, :interested_in_follow_up?)
  end

end
