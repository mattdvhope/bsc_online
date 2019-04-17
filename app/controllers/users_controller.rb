class UsersController < ApplicationController

  before_action :require_leader, :only => [:index]
  before_action :require_user, :only => [:show]

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    redirect_to root_path
  end

  def create
    phone_number = stripped_down_phone_number
    existing_user = determine_if_user_exists(phone_number)
    if existing_user
      add_class_time_for_existing_student(existing_user)
    else
      add_class_time_for_new_student
    end
  end

  private

    def user_params
      params.require(:user).permit(:nickname, :first_name, :last_name, :image, :email, :facebook, :line, :skype_name, :number_of_slots, :password, :password_confirmation, :postal_code, :address_1, :address_2, :city, :sub_district, :district, :province, :country, :phone_number, :organization, :age, :gender, :guest, :role, :pin, :off_site_location_id)
    end

    def determine_if_user_exists(phone_number)
      user = User.find_by_phone_number(phone_number)
    end

    def add_class_time_for_existing_student(existing_user)
      existing_user.update_attributes(formatted_user_attributes)
      assign_class_time_to_student(existing_user)

      times = ClassTime.find(existing_user.class_times.map(&:id).uniq) # to eliminate duplicate class_times
      existing_user.class_times = []
      existing_user.class_times << times

      render json: {:code=>200, :message=>"Successful update of existing user!!"}
    end

    def add_class_time_for_new_student
      user = User.new(formatted_user_attributes)
      user.phone_number = stripped_down_phone_number
      if user.save
        assign_class_time_to_student(user)
        render json: {:code=>200, :message=>"Successful creation of new user!!"}
      else
        begin
          user.save!
        rescue ActiveRecord::RecordInvalid => e
          render json: {:code=>422, :message=>e}
        else
          render json: nil, status: :ok
        end
      end
    end

    def assign_class_time_to_student(user)
      user.class_times << ClassTime.where(id: params[:user][:trainingPeriodId].to_i)
    end

    def formatted_user_attributes
      date = Time.now.strftime "%B %d, %Y"
      {
        guest: user_params[:guest],
        nickname: user_params[:nickname].downcase.capitalize,
        first_name: user_params[:first_name].downcase.capitalize,
        last_name: user_params[:last_name].downcase.capitalize,
        email: user_params[:email].downcase,
        gender: user_params[:gender],
        date_format: date
      }
    end

    def stripped_down_phone_number
      user_params[:phone_number].gsub(/(?!^\+)\D*/, '')
    end

    def student_render(user)
      session[:user_id] = user.id
      @user = user
      render "show" # to get JSON in jbuilder
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
