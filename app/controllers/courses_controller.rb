class CoursesController < ApplicationController

  before_action :require_user, :only => [:show]

  def show
    @course = Course.find(params[:id])
    if @course.id != 1
      render 'under_construction'
    end
    @assessment = @course.provide_assessment_object # method from lib/assessment_providable.rb
    if @assessment
      @assessment.make_sure_choices_are_instantiated(current_user)
    end
  end

end
