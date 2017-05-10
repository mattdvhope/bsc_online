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
      params.require(:business).permit(:business_name, :leader_name, :email, :phone, :line_id)
    end

    def send_business_email(business)
      if Rails.env.production?
        send_production_email(business)
      else
        send_development_email(business)
      end
    end

    def send_production_email(business)
      AppMailer.from_business_to_cep(business).deliver_later
    end

    def send_development_email(business)
      AppMailer.development_env_email(business).deliver_later
    end

end
