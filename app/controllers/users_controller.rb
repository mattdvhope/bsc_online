class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def register_admin
    redirect_to volunteer_intro_path
  end

  def register_vol
    redirect_to volunteer_intro_path
  end

  def new
    redirect_to root_path
  end

  def new_admin
    @user = User.new
  end

  def create
    clear_out_extra_guests_from_app
    @user = params.include?(:user) ? User.new(user_params) : User.new_guest
    log_out_path if users_path
    if @user.save
      unless @user.guest
        transition_to_student_status_if_a_guest_in_app(@user)
        flash[:success] = "You now have a 'member account' with City English Project, #{@user.first_name}. Welcome aboard!"
        send_new_user_email(@user)
      end
      session[:user_id] = @user.id
      redirect_to home_path
    else
      flash[:danger] = "This email address is already being used. Try again with another email address."
      redirect_to register_student_path
    end
  end

  def approve_volunteer
    @user = User.find(params[:id])
    if current_user.admin?
      @user.role = "volunteer"
      @user.save!(:validate => false)
    end
    redirect_to :back
  end

  def disapprove_volunteer
    @user = User.find(params[:id])
    if current_user.admin?
      @user.role = "disapproved_volunteer"
      @user.save!(:validate => false)
    end
    redirect_to :back
  end


  def update
    
  end

  private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :postal_code, :address_1, :address_2, :city, :sub_district, :district, :province, :country, :phone_number, :age, :gender, :occupation, :university_name, :religion, :studied_english_before?, :studied_english_how_long, :interested_in_follow_up?, :guest, :role_id, :pin)
    end

    def transition_to_student_status_if_a_guest_in_app(user)
      user.plans = current_user.plans if current_user # guest?
      user.choices = current_user.choices if current_user # guest?
      user.grades = current_user.grades if current_user # guest?
      current_user.destroy if current_user # guest?
    end

    def send_new_user_email(user)
      if Rails.env.production?
        send_production_email(user)
      else
        send_development_email(user)
      end
    end

    def send_production_email(user)
      if user.city
        AppMailer.admin_applicant(@user).deliver_later
      else
        AppMailer.student_welcome(@user).deliver_later
      end
    end

    def send_development_email(user)
      AppMailer.development_env_email(@user).deliver_later
    end

end
