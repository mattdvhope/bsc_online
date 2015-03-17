class Admin::CoursesController < AdminsController

  def new
    @course = Course.new
  end

  def create
    @course = Course.new(course_params)
    if @course.save
      redirect_to #????? new_admin_course_path(@course)
    else
      redirect_to #?????? new_admin_course_path
    end
  end

  def edit
    
  end

  def update
    
  end

  private

    def course_params
      params.require(:course).permit(:name, :description, :curriculum_id)
    end


end