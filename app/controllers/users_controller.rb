class UsersController < ApplicationController

  before_action :require_leader, :only => [:index, :show, :volunteers]

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def register_admin
    redirect_to volunteer_info_path
  end

  def register_vol
    redirect_to volunteer_info_path
  end

  def volunteers
    @volunteers = User.where("users.role = ? OR users.role = ? OR users.role = ?", "leader", "admin", "volunteer")
  end

  def student_connect_with_volunteer
    student = User.find(params[:id])
    volunteer = User.find(params[:volunteer_id])
    email_from_student_to_volunteer(student, volunteer)
    render :nothing => true
  end

  def new
    redirect_to root_path
  end

  def new_admin
    @user = User.new
  end

  def create
    # @uploader.update_attribute :image_key, params[:key]
    user = User.new(user_params)
    log_out_path if users_path
    if user.guest
      deal_with_guest(user)
    else
      deal_with_non_guest(user)
    end
  end

  def update
    @user = User.find(params[:id])
    @user.update_attributes(user_params)
    render :nothing => true
  end

  def approve_admin
    user = User.find(params[:id])
    if current_user.leader?
      user.role = "admin"
      user.guest = false
      user.save!(:validate => false)
    end
    render :nothing => true
  end

  def disapprove_admin
    user = User.find(params[:id])
    if current_user.leader?
      user.role = "disapproved_admin"
      # user.guest = true
      user.save!(:validate => false)
    end
    render :nothing => true
  end

  private

    def user_params
      params.require(:user).permit(:nickname, :first_name, :last_name, :image, :gender, :email, :password, :password_confirmation, :postal_code, :address_1, :address_2, :city, :sub_district, :district, :province, :country, :phone_number, :age, :gender, :occupation, :university_name, :religion, :studied_english_before?, :studied_english_how_long, :interested_in_follow_up?, :guest, :role_id, :pin, :class_time, :payment_option, :uid_facebook)
    end

    # def transition_to_student_status_if_a_guest_in_app(user)
    #   user.plans = current_user.plans if current_user # guest?
    #   user.choices = current_user.choices if current_user # guest?
    #   user.grades = current_user.grades if current_user # guest?
    #   current_user.destroy if current_user # guest?
    # end

    def deal_with_guest(user)
      if user.save
        redirect_to root_path
        send_new_user_email(user)
      else
binding.pry
        @errors = user.errors.full_messages
        render "errors"
        # flash[:danger] = "Something went wrong. Try signing in again."
        # redirect_to root_path
      end
    end

    def deal_with_non_guest(user)
      if (User.pins_available =~ user.pin) == 0
        set_up(user)
        if user.save
          flash[:success] = "You now have a 'member account' with City English Project, #{user.first_name}. Welcome aboard!"
          session[:user_id] = user.id
          redirect_to home_path
          send_new_user_email(user)
        else
          if user.errors.messages[:password]
            flash[:danger] = "Password #{user.errors.messages[:password].first}."
          elsif user.errors.messages[:postal_code]
            flash[:danger] = "Postal Code #{user.errors.messages[:postal_code].first}."
          end
          redirect_to root_path
        end
      else
        deal_with_bad_pin
      end
    end

    def set_up(user)
      if user.city && user.pin == "000000"
        valid_pin = User.pins_available.inspect[4..-5].split("|").sample
        user.pin = valid_pin
        # user.guest = true
        user.role = "admin_applicant"
      elsif user.city
        user.role = "volunteer"
      end
      user
    end

    def deal_with_bad_pin
      flash[:danger] = "PIN incorrect"
      redirect_to root_path
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
      elsif user.role == "volunteer"
        AppMailer.volunteer_welcome(user).deliver_later
      else
        AppMailer.student_welcome(user).deliver_later
      end
    end

    def email_from_student_to_volunteer(student, volunteer)
      if Rails.env.production?
        AppMailer.student_to_volunteer(student, volunteer).deliver_later
      else
        send_development_email(student)
      end
    end

    def send_development_email(user)
      AppMailer.development_env_email(user).deliver_later
    end

end
