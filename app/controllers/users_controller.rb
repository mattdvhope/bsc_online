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
    user = User.new(user_params)
    log_out_path if users_path
    if user.valid?
      set_user_session(user)
      redirect_to home_path
    else
      flash[:danger] = "Your PIN, email or other input is invalid."
      redirect_to register_student_path
    end
  end

  def approve_admin
    user = User.find(params[:id])
    if current_user.leader?
      user.role = "admin"
      user.guest = false
      user.save!(:validate => false)
    end
    redirect_to :back
  end

  def disapprove_admin
    user = User.find(params[:id])
    if current_user.leader?
      user.role = "disapproved_admin"
      user.guest = true
      user.save!(:validate => false)
    end
    redirect_to :back
  end


  def update
    
  end

  private

    def user_params
      params.require(:user).permit(:first_name, :last_name, :gender, :email, :password, :password_confirmation, :postal_code, :address_1, :address_2, :city, :sub_district, :district, :province, :country, :phone_number, :age, :gender, :occupation, :university_name, :religion, :studied_english_before?, :studied_english_how_long, :interested_in_follow_up?, :guest, :role_id, :pin)
    end

    def transition_to_student_status_if_a_guest_in_app(user)
      user.plans = current_user.plans if current_user # guest?
      user.choices = current_user.choices if current_user # guest?
      user.grades = current_user.grades if current_user # guest?
      current_user.destroy if current_user # guest?
    end

    def set_user_session(user)
      save_new_user(user)
      send_new_user_email(user)
      session[:user_id] = user.id      
    end

    def save_new_user(user)
      pin = user.generate_pin.to_s
      user.add_valid_pin(pin)
      if user.city && user.pin == "000000"
        user.guest = true
        user.role = "admin_applicant"
        user.pin = pin
      else
        if user.city
          user.role = "volunteer"
        else
          user.role = "student"
          user.pin = "000000"
        end
      end
      user.save!
      flash[:success] = "You now have a 'member account' with City English Project, #{user.first_name}. Welcome aboard!"
    end

    def send_new_user_email(user)
      if Rails.env.production?
        send_production_email(user)
      else
        send_development_email(user)
      end
    end

    def send_production_email(user)
      if user.role == "admin_applicant"
        AppMailer.admin_applicant(user).deliver_later
      else
        AppMailer.student_welcome(user).deliver_later
      end
    end

    def send_development_email(user)
      AppMailer.development_env_email(user).deliver_later
    end

end
