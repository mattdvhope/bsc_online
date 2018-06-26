class ClassTimesController < ApplicationController

  # before_action :require_leader, :only => [:index]

  def index
    @class_times = ClassTime.all
  end

  def show
    @class_time = ClassTime.find(params[:id])
  end

  def create
    class_time = ClassTime.new(class_time_params)
    if class_time.save
      flash[:success] = "You have created a new class time."
      render json: nil, status: :ok 
    else
      flash[:danger]= "You were not able to create a new class time. Please ask for help from the CEP web app developer."
      render :json => { :errors => class_time.errors.full_messages }, :status => 422
    end
  end

  def destroy  
    class_time = ClassTime.find(params[:id])
    if class_time.destroy
      flash[:warning] = "You have deleted a class time."
      render json: nil, status: :ok 
    else
      flash[:danger] = "You were not able to delete this class time. Please ask for help from the CEP web app developer."
      render :json => { :errors => class_time.errors.full_messages }, :status => 422
    end
  end

  private

  def class_time_params
    params.require(:class_time).permit(:period, :period_thai, :category, :part, :order_no)
  end

end
