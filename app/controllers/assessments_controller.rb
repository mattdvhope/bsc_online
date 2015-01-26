class AssessmentsController < ApplicationController

  before_action :require_user
  before_action :existing_assessment, only: [:show, :edit, :update]

  def index
    @assessments = Assessment.all
  end

  def show
    if current_user.choices.size == 0
      @assessment.instantiate_new_choices_for_all_answers_for_new_student(current_user)
    end
  end

  def new
    @course = Course.find(params[:course_id])
    @assessment = Assessment.new(course_id: @course.id)
  end

  def create
    @assessment = Assessment.new(assessment_params.merge!(course_id: Course.find(params[:course_id]).id))
    set_up_assessment_answers(@assessment)
    if @assessment.save
      flash[:success] = "You have created your \"#{@assessment.type_of}\" type of assessment."
      redirect_to curriculum_course_assessment_path(@assessment.course.curriculum, @assessment.course, @assessment)
    else
      flash[:danger] = "Your inputs were invalid. Please try again."
      render :new
    end
  end

  def update
    if @assessment.update(assessment_params)
      flash[:success] = "You have edited your assessment."
      redirect_to curriculum_course_assessment_path(@assessment.course.curriculum, @assessment.course, @assessment)
    else
      flash[:danger] = "Your inputs were invalid. Please try again."
      render :new
    end
  end

  private

    def existing_assessment
      @assessment = Assessment.find(params[:id])
    end

    def assessment_params
      params.require(:assessment).permit(:course_id, :part_id, :lesson_id, :type_of, :content, :audio, questions_attributes: [ :id, :question_content, :correct_answer_id, :_destroy, answers_attributes: [ :id, :answer_content, :choice, :correct, :student_id, :_destroy ] ])
    end

end
