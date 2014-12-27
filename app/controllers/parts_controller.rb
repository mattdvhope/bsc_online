class PartsController < ApplicationController

  def index
    
  end

  def show
    @part = Part.find(params[:id])
  end

end
