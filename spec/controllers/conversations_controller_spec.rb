require 'rails_helper'

describe ConversationsController do

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
      @conversation = Conversation.create(lesson_id: @lesson.id)
      set_current_user
    end

    it "sets @lesson" do
      get :index, lesson_id: @lesson.id, part_id: @part.id
      expect(assigns(:lesson)).to be_instance_of Lesson
    end

    it "sets @conversations" do
      get :index, lesson_id: @lesson.id, part_id: @part.id
      expect(assigns(:conversations)).to eq [@conversation]
    end

  end

  describe "GET show" do

    it "sets @conversation" do
      part = Part.create
      lesson = Lesson.create(part_id: part.id)
      conversation = Conversation.create(lesson_id: lesson.id)
      set_current_user
      get :show, id: conversation.id, lesson_id: lesson.id, part_id: part.id
      expect(assigns(:conversation)).to be_instance_of Conversation
    end

  end

















end
