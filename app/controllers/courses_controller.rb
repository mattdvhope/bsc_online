class CoursesController < ApplicationController

  def show
    # gon.user = current_user.name if current_user.guest

    @course = Course.find(params[:id])
    if @course.id != 1
      render 'under_construction'
    else
      unless current_user
        flash[:warning] = "To look at this 'Activated course,' please click 'Try it now!' above."
        require_user
      end
    end
    @assessment = @course.provide_assessment_object # method from lib/assessment_providable.rb
    if @assessment
      @assessment.make_sure_choices_are_instantiated(current_user)
    end
  end

end
