class LessonsController < ApplicationController

  before_action :require_user, :only => [:show]

  def show
    @lesson = Lesson.find(params[:id])
    @assessment = @lesson.provide_assessment_object # method in lib/assessment_providable.rb
    if @assessment
      @assessment.make_sure_choices_are_instantiated(current_user)
    end
  end

end
