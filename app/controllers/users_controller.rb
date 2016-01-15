class UsersController < ApplicationController

  # before_action :require_leader, :only => [:index, :show]

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

  def volunteers
    @volunteers = User.where(role: "admin")
  end

  def student_connect_with_volunteer
    student = User.find(params[:id])
    volunteer = User.find(params[:volunteer_id])
    email_from_student_to_volunteer(student, volunteer)
    redirect_to :back
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
    set_user_session(user)
    if user.valid?
      if user.role == "admin_applicant"
        redirect_to root_path
      else
        redirect_to home_path
      end
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
      params.require(:user).permit(:first_name, :last_name, :gender, :email, :password, :password_confirmation, :postal_code, :address_1, :address_2, :city, :sub_district, :district, :province, :country, :phone_number, :age, :gender, :occupation, :university_name, :religion, :studied_english_before?, :studied_english_how_long, :interested_in_follow_up?, :guest, :role_id, :pin, :uid_facebook)
    end

    def transition_to_student_status_if_a_guest_in_app(user)
      user.plans = current_user.plans if current_user # guest?
      user.choices = current_user.choices if current_user # guest?
      user.grades = current_user.grades if current_user # guest?
      current_user.destroy if current_user # guest?
    end

    def set_user_session(user)
      save_new_user(user)
      send_new_user_email(user) if user.valid?
      session[:user_id] = user.id if user.valid?
    end

    def save_new_user(user)
      if user.city && user.pin == "000000"
        valid_pin = User.pins_available.inspect[4..-5].split("|").sample
        user.pin = valid_pin
        user.guest = true
        user.role = "admin_applicant"
      elsif user.city
        user.role = "volunteer"
      end
      if user.save
        flash[:success] = "You now have a 'member account' with City English Project, #{user.first_name}. Welcome aboard!" if user.valid?
        return user
      end
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

    def email_from_student_to_volunteer(student, volunteer)
      if Rails.env.production?
        AppMailer.student_to_volunteer(student, volunteer).deliver_later
      else
        send_development_email(user)
      end
    end

    def send_development_email(user)
      AppMailer.development_env_email(user).deliver_later
    end

end
