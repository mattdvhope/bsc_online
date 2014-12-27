class UsersController < ApplicationController

  def new
    @user = User.new
    @courses = Course.all
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:success] = "You now have a 'member account' with BSC English Online. Welcome aboard!"
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
