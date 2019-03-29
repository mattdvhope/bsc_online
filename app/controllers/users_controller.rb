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
    user = User.new(user_params)
    format_user_attributes(user)
    log_out_path if users_path
    deal_with_student(user)
  end

  def update
    phone_number = user_params[:phone_number]
    phone_number = phone_number.gsub(/(?!^\+)\D*/, '')
    user = User.find_by(phone_number: phone_number)
    user.class_times << ClassTime.where(id: params[:user][:trainingPeriodId].to_i)
    render json: nil, status: :ok
  end

  private

    def user_params
      params.require(:user).permit(:nickname, :first_name, :last_name, :image, :email, :facebook, :line, :skype_name, :number_of_slots, :password, :password_confirmation, :postal_code, :address_1, :address_2, :city, :sub_district, :district, :province, :country, :phone_number, :organization, :age, :gender, :guest, :role, :pin, :off_site_location_id)
    end

    def format_user_attributes(user)
      user.first_name = user.first_name.downcase.capitalize
      user.last_name = user.last_name.downcase.capitalize
      user.off_site_location_id = user.off_site_location_id.to_i
      user.phone_number = user.phone_number.gsub(/(?!^\+)\D*/, '')
      user.email = user.email.downcase
      user.nickname = user.nickname.downcase.capitalize
      user.date_format = Time.now.strftime "%B %d, %Y"
      user
    end

    def deal_with_student(user)
      if user.save
        user.class_times << ClassTime.where(id: params[:user][:trainingPeriodId].to_i)
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
