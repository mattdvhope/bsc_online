class PagesController < ApplicationController

  def front
    redirect_to syllabuses_path if current_user
    @curriculums = Curriculum.all
  end

end
