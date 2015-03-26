class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    clear_out_extra_guests_from_app
    @user = params.include?(:user) ? User.new(user_params) : User.new_guest
    log_out_path if users_path
    if @user.save
      if @user.guest
        flash[:success] = "You are logged in as a temporary guest. Please be aware that any work you do while logged in as a 'temporary guest' will not be recorded after you have logged out. But if you decide to Join BSC English Online (while still logged in this time!), all your work from this time will be retained."
      else
        transition_to_student_status_if_a_guest_in_app(@user)
        flash[:success] = "You now have a 'member account' with BSC English Online, #{@user.first_name}. Welcome aboard!"
        AppMailer.send_welcome_email(@user).deliver_later
      end
      session[:user_id] = @user.id
      redirect_to home_path
    else
      flash[:danger] = "You were not able to Sign Up"
      render :new
    end
  end

  private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :postal_code, :address_1, :address_2, :city, :sub_district, :district, :province, :country, :phone_number, :age, :gender, :occupation, :university_name, :religion, :studied_english_before?, :studied_english_how_long, :interested_in_follow_up?, :guest)
    end

    def transition_to_student_status_if_a_guest_in_app(user)
      user.plans = current_user.plans if current_user # guest?
      user.choices = current_user.choices if current_user # guest?
      user.grades = current_user.grades if current_user # guest?
      current_user.destroy if current_user # guest?
    end

end
