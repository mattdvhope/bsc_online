class GradesController < ApplicationController

  before_action :require_user

  def index
    
  end

  def show # 'grade' created in 'assessments_controller.rb'
    @grade = Grade.find(params[:id])
  end

  def update
    @grade = Grade.find(params[:id])
    @grade.student_score_for_assessment(current_user)
    redirect_to log_out_path
  end

end
