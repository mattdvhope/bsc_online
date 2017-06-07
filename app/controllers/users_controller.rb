class UsersController < ApplicationController

  before_action :require_leader, :only => [:index]
  before_action :require_user, :only => [:show]

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

  def new
    redirect_to root_path
  end

  def new_admin
    @user = User.new
  end

  def create
    # @uploader.update_attribute :image_key, params[:key]
    user = User.new(user_params)
    user.nickname = user.nickname.downcase.capitalize
    user.first_name = user.first_name.downcase.capitalize
    user.last_name = user.last_name.downcase.capitalize
    user.off_site_location_id = user.off_site_location_id.to_i
    user.email = user.email.downcase
    log_out_path if users_path
    if user.guest
      deal_with_guest(user)
    elsif user.role == "volunteer" && user.pin != "000000"
      deal_with_volunteer(user)
    elsif user.role == "admin_applicant"
      deal_with_admin_applicant(user)
    elsif user.role == "student" && user.pin != "000000"
      fully_register_student(user)
    end
  end

  def update
    @user = User.find(params[:id])
    if params[:number_of_slots]
      @user.number_of_slots = params[:number_of_slots]
      add_number_of_slots_to_volunteer(@user)
    else
      @user.update_attributes(user_params)
      render :nothing => true
    end
  end

  def add_number_of_slots_to_volunteer(user)
    if user.save!(:validate => false)
      render "show"
    else
      render :json => { :errors => user.errors.full_messages }, :status => 422
    end
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

  def unsubscribe
    if user = User.read_access_token(params[:signature])
      user.update_attribute :guest, false # maybe add a boolean attribute, "email_opt_in" or something like that... this attribute would be made false here
      render text: "คุณได้รับการยกเลิกการเป็นสมาชิก / You have been unsubscribed."
    else
      render text: "Invalid Link"
    end
  end

  private

    def user_params
      params.require(:user).permit(:nickname, :first_name, :last_name, :image, :gender, :email, :facebook, :line, :skype_name, :number_of_slots, :password, :password_confirmation, :postal_code, :address_1, :address_2, :city, :sub_district, :district, :province, :country, :phone_number, :organization, :age, :gender, :guest, :role, :pin, :off_site_location_id)
    end

    def deal_with_guest(user)
      user.class_period = params[:class_time_scheduled]
      user.date_format = DateTime.now.strftime("%A, %B %d, %Y")
      if user.save
        relate_user_to_class_time(user)
        render json: nil, status: :ok # to render nothing, but still retain json response; It did cause a problem with 'parse in user.js though'.. have to check it out
        if user.email != ""
          send_new_user_email(user)
        end
      else
        render :json => { :errors => user.errors.full_messages }, :status => 422
      end
    end

    def relate_user_to_class_time(user)
      class_time = ClassTime.find_by(period: user.class_period)
      class_time.users << user
    end

    def fully_register_student(user)
      if (User.pins_available =~ user.pin) == 0
        guests = User.where("users.role = ?", "student").where("users.guest = ?", "TRUE")
        old_guest_student = guests.find_by(email: user.email.downcase)
        if old_guest_student
          old_guest_student.guest = false
          set_password(old_guest_student)
          old_guest_student.skype_name = user.skype_name
          if old_guest_student.save
            student_render(old_guest_student)
            send_new_user_email(old_guest_student)
          else
            render :json => { :errors => old_guest_student.errors.full_messages }, :status => 422
          end
        else
          set_password(user)
          if user.save
            student_render(user)
            send_new_user_email(user)
          else
            render :json => { :errors => user.errors.full_messages }, :status => 422
          end
        end
      else
        deal_with_bad_pin
      end
    end #

    def set_password(user)
      user.password = params[:password]
      user.password_confirmation = params[:password_confirmation]
    end

    def student_render(user)
      session[:user_id] = user.id
      @user = user
      render "show" # to get JSON in jbuilder
    end

    def deal_with_volunteer(user)
      if (User.pins_available =~ user.pin) == 0
        save_vol_or_admin_applicant(user)
      else
        deal_with_bad_pin
      end
    end

    def deal_with_bad_pin
      render :json => { :errors => "Incorrect PIN" }, :status => 422
    end

    def deal_with_admin_applicant(user)
      save_vol_or_admin_applicant(user)
    end

    def save_vol_or_admin_applicant(user)
      deal_with_password(user)
      if user.save
        session[:user_id] = user.id unless user.role == "admin_applicant"
        send_new_user_email(user)
        @user = user
        render "show" # to get JSON in jbuilder
      else
        render :json => { :errors => user.errors.full_messages }, :status => 422
      end
    end

    def deal_with_password(user)
      user.password = params[:password]
      user.password_confirmation = params[:password_confirmation]       
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

    def send_development_email(user)
      AppMailer.development_env_email(user).deliver_later
    end

end
