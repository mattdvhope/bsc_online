class BusinessesController < ApplicationController

  def index
  end

  def create
    @business = Business.new(business_params)
    if @business.save
      render "show"
      send_business_email(@business)
    else
      render :json => { :errors => @business.errors.full_messages }, :status => 422
    end

  end

  private

    def business_params
      params.require(:business).permit(:business_name, :business_address, :leader_name, :employees_no, :times, :days, :email, :phone)
    end

    def send_business_email(business)
      if Rails.env.production?
        send_production_email(business)
      else
        send_production_email(business)
        # send_development_email(business)
      end
    end

    def send_production_email(business)
      AppMailer.from_business_to_cep(business).deliver_later
    end

    def send_development_email(business)
      AppMailer.development_env_email(user).deliver_later
    end

end
