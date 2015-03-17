class Admin::CurriculumsController < AdminsController

  def new
    @curriculum = Curriculum.new
  end

  def create
    @curriculum = Curriculum.new(curriculum_params)
    if @curriculum.save
      flash[:success] = "You have created the new \"#{@curriculum.name}\" curriculum. Now click on 'Courses' to build a new course in the \"#{@curriculum.name}\" curriculum."
      redirect_to build_path
    else
      flash[:danger] = "Your inputs were invalid. Please try again."
      redirect_to new_admin_curriculum_path
    end
  end

  def edit
    
  end

  def update
    
  end

  private

    def curriculum_params
      params.require(:curriculum).permit(:name, :description)
    end


end