class GradesController < ApplicationController

  before_action :require_user

  def index
    
  end

  def show
    @grade
  end

end
