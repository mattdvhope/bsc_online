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

ActiveRecord::Schema.define(version: 20160617074953) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admin_applications", force: :cascade do |t|
    t.integer  "user_id"
    t.text     "response_first"
    t.text     "response_second"
    t.text     "response_third"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.boolean  "approved",        default: false
  end

  create_table "answers", force: :cascade do |t|
    t.integer  "question_id"
    t.text     "answer_content"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "choice"
    t.boolean  "correct"
    t.string   "correctness"
    t.boolean  "chosen",         default: false
  end

  create_table "assessments", force: :cascade do |t|
    t.integer  "course_id"
    t.integer  "part_id"
    t.integer  "lesson_id"
    t.text     "content"
    t.string   "audio"
    t.integer  "score"
    t.boolean  "passed?"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "type_of"
  end

  create_table "choices", force: :cascade do |t|
    t.integer  "answer_id"
    t.integer  "student_id"
    t.boolean  "selected"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "class_times", force: :cascade do |t|
    t.string   "period"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.string   "period_thai"
    t.string   "category"
  end

  create_table "conversations", force: :cascade do |t|
    t.integer  "lesson_id"
    t.string   "lesson_language_version"
    t.text     "content"
    t.string   "audio"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "courses", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "activated"
    t.integer  "curriculum_id"
    t.string   "description"
  end

  create_table "curriculums", force: :cascade do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "description"
    t.string   "name"
  end

  create_table "events", force: :cascade do |t|
    t.string   "name"
    t.integer  "month"
    t.integer  "date"
    t.text     "notes"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "grades", force: :cascade do |t|
    t.integer  "student_id"
    t.integer  "assessment_id"
    t.integer  "score"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "lessons", force: :cascade do |t|
    t.integer  "part_id"
    t.string   "name"
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "mailkick_opt_outs", force: :cascade do |t|
    t.string   "email"
    t.integer  "user_id"
    t.string   "user_type"
    t.boolean  "active",     default: true, null: false
    t.string   "reason"
    t.string   "list"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "mailkick_opt_outs", ["email"], name: "index_mailkick_opt_outs_on_email", using: :btree
  add_index "mailkick_opt_outs", ["user_id", "user_type"], name: "index_mailkick_opt_outs_on_user_id_and_user_type", using: :btree

  create_table "parts", force: :cascade do |t|
    t.integer  "course_id"
    t.boolean  "completed?"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
  end

  create_table "photos", force: :cascade do |t|
    t.string   "image"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "plans", force: :cascade do |t|
    t.integer  "curriculum_id"
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "student_id"
  end

  create_table "practices", force: :cascade do |t|
    t.integer  "lesson_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "content"
    t.string   "audio"
    t.string   "type_of"
  end

  create_table "questions", force: :cascade do |t|
    t.integer  "assessment_id"
    t.text     "question_content"
    t.integer  "correct_answer_id"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "stories", force: :cascade do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "lesson_id"
    t.string   "lesson_language_version"
    t.text     "content"
    t.string   "audio"
  end

  create_table "users", force: :cascade do |t|
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
    t.string   "country"
    t.string   "phone_number"
    t.integer  "age"
    t.string   "gender"
    t.boolean  "studied_english_before?"
    t.integer  "studied_english_how_long"
    t.boolean  "interested_in_follow_up?"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "guest"
    t.string   "postal_code"
    t.string   "role",                     default: "student"
    t.string   "pin",                      default: "000000"
    t.string   "uid_facebook"
    t.string   "nickname"
    t.string   "image"
    t.string   "payment_option"
    t.integer  "class_time_id"
    t.string   "class_period"
    t.string   "date_format"
  end

end
