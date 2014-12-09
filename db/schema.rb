# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141208081413) do

  create_table "courses", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "activated"
  end

  create_table "curriculums", force: true do |t|
    t.integer  "user_id"
    t.integer  "course_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "description"
  end

  create_table "users", force: true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "email"
    t.string   "password_digest"
    t.string   "address_1"
    t.string   "address_2"
    t.string   "city"
    t.string   "sub_district"
    t.string   "district"
    t.string   "province"
    t.integer  "postal_code",              limit: 255
    t.string   "country"
    t.string   "phone_number"
    t.integer  "age"
    t.string   "gender"
    t.string   "occupation"
    t.string   "university_name"
    t.string   "religion"
    t.boolean  "studied_english_before?"
    t.integer  "studied_english_how_long"
    t.boolean  "interested_in_follow_up?"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
