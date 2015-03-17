class Admin::CoursesController < AdminsController

  before_action :existing_course, only: [:edit, :update]

  def new
    @course = Course.new
  end

  def create
    @course = Course.new(course_params)
    if @course.save
      flash[:success] = "You have created the new \"#{@course.name}\" course. Now click on 'Parts' to build new parts in the \"#{@course.name}\" course."
      redirect_to build_path
    else
      flash[:danger] = "Your inputs were invalid. Please try again."
      redirect_to new_admin_course_path
    end
  end

  def update
    if @course.update(course_params)
      flash[:success] = "You have edited your course's name and description. Now you can edit its parts and its lessons"
      redirect_to build_path
    else
      flash[:danger] = "Your inputs were invalid. Please try again."
      redirect_to edit_admin_course_path(@course)
    end
  end

  private

    def existing_course
      @course = Course.find(params[:id])
    end

    def course_params
      params.require(:course).permit(:name, :description, :curriculum_id)
    end


end