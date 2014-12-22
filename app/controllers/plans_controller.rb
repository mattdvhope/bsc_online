class PlansController < ApplicationController

  before_action :require_user

  def index
    @plans = current_user.plans
    if current_user.plans.empty?
      redirect_to new_plan_path 
    else
      render 'index'
    end
  end

  def new
    @plan = Plan.new
    @curriculums = Curriculum.all
  end

  def create
    
  end

  def show
    @plan = Plan.find(params[:id])
  end

end
