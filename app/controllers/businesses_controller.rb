class BusinessesController < ApplicationController

  def index
  end

  def create
    @business = Business.new(business_params)
    if @business.save
      render "show"
    else
      render :json => { :errors => @business.errors.full_messages }, :status => 422
    end

  end

  private

    def business_params
      params.require(:business).permit(:business_name, :business_address, :leader_name, :employees_no, :times, :days, :email, :phone)
    end



end
