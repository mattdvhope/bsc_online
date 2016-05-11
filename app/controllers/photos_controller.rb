class PhotosController < ApplicationController

  def index
    @photos = @photos.sort_by(&:created_at)

    @uploader = ImageUploader.new
    @uploader.success_action_redirect = new_tank_photo_url(@tank)

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @photos }
    end
  end

  def create
    respond_to do |format|

      if @photo.save_and_process_image
        format.html { redirect_to tank_photos_path(@tank), notice: 'Photo uploaded successfully and is being processed...' }
        format.json { render json: @photo, status: :created, location: @photo }
      else
        format.html { render :new }
        format.json { render json: @photo.errors, status: :unprocessable_entity }
      end
    end
  end
end
