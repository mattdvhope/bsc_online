class CourseRegistrationsController < ApplicationController

  before_action :require_user

  def new
  end

  # def create
  # end

  def index
    @curriculums = Curriculum.all
  end

end
