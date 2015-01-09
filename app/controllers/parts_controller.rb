class PartsController < ApplicationController

  def show
    @part = Part.find(params[:id])
  end

end
