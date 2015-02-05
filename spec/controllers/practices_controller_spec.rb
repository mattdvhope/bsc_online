require 'rails_helper'

describe PracticesController do

  describe "GET #index" do

    before :each do
      @part = Part.create
      @lesson = Lesson.create(part_id: @part.id)
      set_current_user
    end

    it "sets the @lesson to the selected lesson" do
      get :index, part_id: @part.id, lesson_id: @lesson.id
      expect(assigns(:lesson)).to be_instance_of Lesson
      expect(assigns(:lesson)).to eq(@lesson)
    end

    it "sets @practices to all the practices" do
      practice1 = Practice.create(lesson_id: @lesson.id)
      practice2 = Practice.create(lesson_id: @lesson.id)
      practices = [practice1, practice2]
      get :index, part_id: @part.id, lesson_id: @lesson.id
      expect(assigns(:practices)).to match_array(practices)
    end

  end

  describe "GET #show" do

    it "sets the @practice to the selected practice" do
      set_current_user
      part = Part.create
      lesson = Lesson.create(part_id: part.id)
      practice = Practice.create(lesson_id: lesson.id)
      get :show, part_id: part.id, lesson_id: lesson.id, id: practice.id
      expect(assigns(:practice)).to be_instance_of Practice
      expect(assigns(:practice)).to eq(practice)
    end

  end

end
