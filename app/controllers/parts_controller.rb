class PartsController < ApplicationController

  before_action :require_user, :only => [:show]

  def show
    @part = Part.find(params[:id])
    @assessment = @part.provide_assessment_object # method from lib/assessment_providable.rb
    if @assessment
      @assessment.make_sure_choices_are_instantiated(current_user)
    end
  end

end
