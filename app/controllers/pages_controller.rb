class PagesController < ApplicationController

  def front
    # redirect_to syllabus_path if current_user
    @curriculums = Curriculum.all
  end

end
