class PlansController < ApplicationController

  before_action :require_user

  def index
    @curriculums = Curriculum.all
    @plans = current_user.plans
    if current_user.plans.empty?
      redirect_to new_plan_path 
    else
      render 'index'
    end
  end

  def show
    @plan = Plan.find(params[:id])
  end

  def new
    @plan = Plan.new
    @curriculums = Curriculum.all
  end

  def create
    @plan = Plan.new(plan_params.merge(student_id: current_user.id)) # .merge! is a ruby method that keeps all the current key-value pairs of the first hash and tacks on any other key value pairs that the second one has.  If any keys are the same, .merge! will keep the first hash's key-values.  Using only #merge will keep the SECOND hash's key value pairs when a key is the same between the two.
    if @plan.save
      flash[:success] = "You have created your first plan."
      redirect_to plan_path(@plan)
    else
      flash[:danger] = "Your inputs were invalid. Please try again."
      render :new
    end
  end

  private

  def plan_params
    params.require(:plan).permit(:curriculum_id, :description)
  end

end
