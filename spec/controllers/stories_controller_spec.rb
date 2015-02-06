require 'rails_helper'

describe StoriesController do

  it_behaves_like "requires log in" do
    let(:action) {
      part = Part.create
      lesson = Lesson.create(part_id: part.id)
      get :index, lesson_id: lesson.id, part_id: part.id
    }
  end

  describe "GET index" do

    before :each do
      @part = Part.create
      @lesson = Lesson.create(part_id: @part.id)
      @story = Story.create(lesson_id: @lesson.id)
      set_current_user
    end

    it "sets @lesson" do
      get :index, lesson_id: @lesson.id, part_id: @part.id
      expect(assigns(:lesson)).to be_instance_of Lesson
    end

    it "sets @stories" do
      get :index, lesson_id: @lesson.id, part_id: @part.id
      expect(assigns(:stories)).to eq [@story]
    end

  end

  describe "GET show" do

    it "sets @story" do
      part = Part.create
      lesson = Lesson.create(part_id: part.id)
      story = Story.create(lesson_id: lesson.id)
      set_current_user
      get :show, id: story.id, lesson_id: lesson.id, part_id: part.id
      expect(assigns(:story)).to be_instance_of Story
    end

  end

end
