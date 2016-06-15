class ClassTimesController < ApplicationController

  def index
    @class_times = ClassTime.all
  end

  def show
    @class_time = ClassTime.find(params[:id])
  end

  def new
    @class_time = ClassTime.new
  end

  def create
    class_time = ClassTime.new(class_time_params)
    if class_time.save
      flash[:success] = "You've successfully added a new class time"
      redirect_to dashboard_path
    else
      flash[:danger] = "Ask your IT admin why you could not create a new class time"
      redirect_to dashboard_path
    end
  end

  private

    def class_time_params
      params.require(:class_time).permit(:period)
    end

end
