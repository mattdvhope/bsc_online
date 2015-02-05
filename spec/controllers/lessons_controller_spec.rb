require 'rails_helper'

describe LessonsController do

  describe "GET show" do

    it "sets @lesson" do
      set_current_user
      part = Part.create
      lesson = Lesson.create(part_id: part.id)
      get :show, id: lesson.id, part_id: part.id
      expect(assigns(:lesson)).to be_instance_of Lesson
    end

  end

end
