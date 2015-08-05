class Admin::AssessmentsController < AdminsController

  before_action :existing_assessment, only: [:edit, :update]

  def index
    @assessments = Assessment.all
  end

  def new
    @course = Course.find(params[:course_id])
    @assessment = Assessment.new(course_id: @course.id)
  end

  def create
    @assessment = Assessment.new(assessment_params.merge!(course_id: Course.find(params[:course_id]).id))
    if @assessment.save
      flash[:success] = "You have created your \"#{@assessment.type_of}\" type of assessment."
      instantiate_choices_for_person_building_assessment
      redirect_to curriculum_course_assessment_path(@assessment.course.curriculum, @assessment.course, @assessment)
    else
      flash[:danger] = "Your inputs were invalid. Please try again."
      @course = Course.find(params[:course_id])
      redirect_to new_curriculum_course_admin_assessment_path
    end
  end

  def update
    if @assessment.update(assessment_params)
      flash[:success] = "You have edited your assessment."
      instantiate_choices_for_person_building_assessment
      redirect_to curriculum_course_assessment_path(@assessment.course.curriculum, @assessment.course, @assessment)
    else
      flash[:danger] = "Your inputs were invalid. Please try again."
      redirect_to edit_curriculum_course_admin_assessment_path(@assessment.course.curriculum, @assessment.course, @assessment)
    end
  end

  private

    def existing_assessment
      @assessment = Assessment.find(params[:id])
    end

    def assessment_params
      params.require(:assessment).permit(:course_id, :part_id, :lesson_id, :type_of, :content, :audio, questions_attributes: [ :id, :question_content, :correct_answer_id, :_destroy, answers_attributes: [ :id, :answer_content, :choice, :correct, :student_id, :_destroy ] ])
    end

    def instantiate_choices_for_person_building_assessment
      @assessment.instantiate_new_choices_for_all_answers(current_user)      
    end

end