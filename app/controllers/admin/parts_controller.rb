class Admin::PartsController < AdminsController

  before_action :existing_part, only: [:edit, :update]

  def new
    @part = Part.new
  end

  def create
    @part = Part.new(part_params)
    if @part.save
      flash[:success] = "You have created the new \"#{@part.name}\" part. Now click on 'Lessons' to build new lessons in the \"#{@part.name}\" lesson."
      redirect_to build_path
    else
      flash[:danger] = "Your inputs were invalid. Please try again."
      redirect_to new_admin_part_path
    end
  end

  def update
    if @part.update(part_params)
      flash[:success] = "You have edited your part's name and description. Now you can edit its parts and its lessons"
      redirect_to build_path
    else
      flash[:danger] = "Your inputs were invalid. Please try again."
      redirect_to edit_admin_part_path(@part)
    end
  end

  private

    def existing_part
      @part = Part.find(params[:id])
    end

    def part_params
      params.require(:part).permit(:name, :completed?, :course_id)
    end

end