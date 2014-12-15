class PagesController < ApplicationController

  def front
    @courses = Course.all
  end

end
