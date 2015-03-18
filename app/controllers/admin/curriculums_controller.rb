class Admin::CurriculumsController < AdminsController

  before_action :existing_curriculum, only: [:edit, :update]

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

  def update
    if @curriculum.update(curriculum_params)
      flash[:success] = "You have edited your curriculum's name and description. Now you can edit its content"
      redirect_to build_path
    else
      flash[:danger] = "Your inputs were invalid. Please try again."
      redirect_to edit_admin_curriculum_path(@curriculum)
    end
  end

  private

    def existing_curriculum
      @curriculum = Curriculum.find(params[:id])
    end

    def curriculum_params
      params.require(:curriculum).permit(:name, :description)
    end

end