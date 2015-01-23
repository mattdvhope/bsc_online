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

ActiveRecord::Schema.define(version: 20150123012719) do

  create_table "answers", force: :cascade do |t|
    t.integer  "question_id"
    t.text     "answer_content"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "choice"
    t.boolean  "correct"
  end

  create_table "assessments", force: :cascade do |t|
    t.integer  "course_id"
    t.integer  "part_id"
    t.integer  "lesson_id"
    t.text     "content"
    t.string   "audio",      limit: 255
    t.integer  "score"
    t.boolean  "passed?"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "type_of",    limit: 255
  end

  create_table "choices", force: :cascade do |t|
    t.boolean  "selected"
    t.integer  "selectable_id"
    t.string   "selectable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "choices", ["selectable_type", "selectable_id"], name: "index_choices_on_selectable_type_and_selectable_id"

  create_table "conversations", force: :cascade do |t|
    t.integer  "lesson_id"
    t.string   "lesson_language_version", limit: 255
    t.text     "content"
    t.string   "audio",                   limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "courses", force: :cascade do |t|
    t.string   "name",          limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "activated"
    t.integer  "curriculum_id"
    t.string   "description",   limit: 255
  end

  create_table "curriculums", force: :cascade do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "description", limit: 255
    t.string   "name",        limit: 255
  end

  create_table "lessons", force: :cascade do |t|
    t.integer  "part_id"
    t.string   "name",        limit: 255
    t.string   "description", limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "parts", force: :cascade do |t|
    t.integer  "course_id"
    t.boolean  "completed?"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "name"
  end

  create_table "plans", force: :cascade do |t|
    t.integer  "curriculum_id"
    t.string   "description",   limit: 255
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "student_id"
  end

  create_table "practices", force: :cascade do |t|
    t.integer  "lesson_id"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "content"
    t.string   "audio",      limit: 255
    t.string   "type_of",    limit: 255
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
    t.string   "lesson_language_version", limit: 255
    t.text     "content"
    t.string   "audio",                   limit: 255
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name",               limit: 255
    t.string   "last_name",                limit: 255
    t.string   "email",                    limit: 255
    t.string   "password_digest",          limit: 255
    t.string   "address_1",                limit: 255
    t.string   "address_2",                limit: 255
    t.string   "city",                     limit: 255
    t.string   "sub_district",             limit: 255
    t.string   "district",                 limit: 255
    t.string   "province",                 limit: 255
    t.integer  "postal_code",              limit: 255
    t.string   "country",                  limit: 255
    t.string   "phone_number",             limit: 255
    t.integer  "age"
    t.string   "gender",                   limit: 255
    t.string   "occupation",               limit: 255
    t.string   "university_name",          limit: 255
    t.string   "religion",                 limit: 255
    t.boolean  "studied_english_before?"
    t.integer  "studied_english_how_long"
    t.boolean  "interested_in_follow_up?"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "guest"
  end

end
