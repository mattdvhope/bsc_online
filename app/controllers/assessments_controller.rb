class AssessmentsController < ApplicationController

  before_action :require_user

  def index
    @assessments = Assessment.all
  end

  def show
    @assessment = Assessment.find(params[:id])
  end

  def new
    @assessment = Assessment.new
  end

  def create
    @assessment = Assessment.new(assessment_params)
    @assessment.make_answers_correct_true_if_choice_correct
    if @assessment.save
      flash[:success] = "You have created your \"#{@assessment.type_of}\" type of assessment."
      redirect_to assessment_path(@assessment)
    else
      flash[:danger] = "Your inputs were invalid. Please try again."
      render :new
    end
  end

  def edit
    @assessment = Assessment.find(params[:id])
  end

  def update
    @assessment = Assessment.find(params[:id])
    if @assessment.update(assessment_params)
      flash[:success] = "You have edited your assessment."
      redirect_to assessment_path(@assessment)
    else
      flash[:danger] = "Your inputs were invalid. Please try again."
      render :new
    end
  end

  private

  def assessment_params
    params.require(:assessment).permit(:course_id, :part_id, :lesson_id, :type_of, :content, questions_attributes: [ :id, :question_content, :correct_answer_id, :_destroy, answers_attributes: [ :id, :answer_content, :choice, :correct?, :_destroy ] ])
  end

  def make_correct_answer_to_true
    
  end

end
