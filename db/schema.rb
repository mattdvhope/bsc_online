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

ActiveRecord::Schema.define(version: 20180315191054) do

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

  create_table "businesses", force: :cascade do |t|
    t.string   "business_name"
    t.string   "business_address"
    t.string   "leader_name"
    t.integer  "employees_no"
    t.string   "times"
    t.string   "days"
    t.string   "email"
    t.string   "phone"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "line_id"
  end

  create_table "chatrooms", force: :cascade do |t|
    t.string   "topic"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
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
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.string   "period_thai"
    t.string   "category"
    t.integer  "order_no"
    t.boolean  "completed",   default: false
    t.boolean  "cancelled",   default: false
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

  create_table "jekyll_users", id: :bigserial, force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "lessons", force: :cascade do |t|
    t.integer  "part_id"
    t.string   "name"
    t.string   "description"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "messages", force: :cascade do |t|
    t.string   "content"
    t.integer  "user_id"
    t.integer  "chatroom_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "off_site_locations", force: :cascade do |t|
    t.string   "location_english"
    t.string   "location_thai"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "completed"
  end

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

  create_table "skype_time_slots", force: :cascade do |t|
    t.text     "day"
    t.text     "time_period"
    t.text     "am_pm"
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
    t.boolean  "available",    default: true
    t.integer  "volunteer_id"
    t.integer  "student_id"
    t.integer  "orderday"
    t.integer  "ordertime"
    t.integer  "orderam"
    t.string   "day_thai"
    t.string   "time_thai"
    t.integer  "date_chosen"
    t.integer  "month_chosen"
    t.integer  "year_chosen"
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
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "guest"
    t.string   "postal_code"
    t.string   "role",                 default: "student"
    t.string   "pin",                  default: "000000"
    t.string   "nickname"
    t.string   "image"
    t.integer  "class_time_id"
    t.string   "class_period"
    t.string   "date_format"
    t.string   "organization"
    t.string   "national_id"
    t.string   "skype_name"
    t.integer  "number_of_slots",      default: 0
    t.string   "facebook"
    t.string   "line"
    t.integer  "off_site_location_id"
  end

end
