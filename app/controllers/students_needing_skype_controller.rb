class StudentsNeedingSkypeController < ApplicationController

  before_action :require_user

  def index
    @students = User.where("users.role = ?", "student")
  end

  def show
    @student = User.find(params[:id])
  end

end