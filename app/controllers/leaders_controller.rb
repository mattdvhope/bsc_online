class LeadersController < ApplicationController

  def index
    @leaders = User.where(role: "leader")
  end

  def create
    leader = User.new(
      guest: params[:guest],
      first_name: params[:first_name],
      last_name: params[:last_name],
      gender: params[:gender],
      phone_number: stripped_down_phone_number,
      email: params[:email],
      role: params[:role],
      password: params[:password],
      password_confirmation: params[:password_confirmation]
    )

    if leader.save
      render json: {:code=>200, :message=>"Successful creation of new leader!!"}
    else
      begin
        leader.save!
      rescue ActiveRecord::RecordInvalid => e
        render json: {:code=>422, :message=>e}
      else
        render json: nil, status: :ok
      end
    end

  end

  private

    def stripped_down_phone_number
      params[:phone_number].gsub(/(?!^\+)\D*/, '')
    end

end
