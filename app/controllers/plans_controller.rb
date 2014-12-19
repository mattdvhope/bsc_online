class PlansController < ApplicationController

  before_action :require_user

  def new
    @plan = Plan.new
  end

  def index
    @plans = current_user.plans
    if current_user.plans == []
      redirect_to new_plan_path 
    else
      render 'index'
    end
  end

  def create
    
  end

  def show
    @plan = Plan.find(params[:id])
  end

end
