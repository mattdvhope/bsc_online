class ClassTimesController < ApplicationController

  def index
    @class_times = ClassTime.all
  end

  def show
    @class_time = ClassTime.find(params[:id])
  end

end
