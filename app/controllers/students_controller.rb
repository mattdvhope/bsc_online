class StudentsController < ApplicationController

  def index
    @students = User.where(role: "student")
  end

end
