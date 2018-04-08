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

ActiveRecord::Schema.define(version: 20180408005733) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.string "street", null: false
    t.string "street_two"
    t.string "city", null: false
    t.string "state", null: false
    t.string "zip", null: false
    t.string "country"
    t.string "addressable_type", null: false
    t.bigint "addressable_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["addressable_type", "addressable_id"], name: "index_addresses_on_addressable_type_and_addressable_id"
  end

  create_table "budgets", force: :cascade do |t|
    t.bigint "subdepartment_id", null: false
    t.float "amount", null: false
    t.date "date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["subdepartment_id"], name: "index_budgets_on_subdepartment_id"
  end

  create_table "departments", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "hotel_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["hotel_id"], name: "index_departments_on_hotel_id"
  end

  create_table "employee_jobs", force: :cascade do |t|
    t.bigint "employee_id", null: false
    t.bigint "job_id", null: false
    t.string "pay_type"
    t.float "pay_rate", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_employee_jobs_on_employee_id"
    t.index ["job_id"], name: "index_employee_jobs_on_job_id"
  end

  create_table "employee_roles", force: :cascade do |t|
    t.bigint "employee_id", null: false
    t.bigint "role_id", null: false
    t.bigint "hotel_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["employee_id"], name: "index_employee_roles_on_employee_id"
    t.index ["hotel_id"], name: "index_employee_roles_on_hotel_id"
    t.index ["role_id"], name: "index_employee_roles_on_role_id"
  end

  create_table "employees", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "string"
    t.string "last_name", null: false
    t.string "phone_number"
    t.string "email_address"
    t.bigint "user_id"
    t.bigint "string_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["string_id"], name: "index_employees_on_string_id"
    t.index ["user_id"], name: "index_employees_on_user_id"
  end

  create_table "expense_categories", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "department_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["department_id"], name: "index_expense_categories_on_department_id"
  end

  create_table "expenses", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "expense_category_id", null: false
    t.float "amount", null: false
    t.date "date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["expense_category_id"], name: "index_expenses_on_expense_category_id"
  end

  create_table "hotels", force: :cascade do |t|
    t.string "name", null: false
    t.string "phone_number", null: false
    t.integer "number_of_rooms"
    t.string "manager_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "jobs", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "subdepartment_id", null: false
    t.string "pay_type", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["subdepartment_id"], name: "index_jobs_on_subdepartment_id"
  end

  create_table "rights", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "roles", force: :cascade do |t|
    t.string "name", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "roles_rights", force: :cascade do |t|
    t.bigint "role_id", null: false
    t.bigint "right_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["right_id"], name: "index_roles_rights_on_right_id"
    t.index ["role_id"], name: "index_roles_rights_on_role_id"
  end

  create_table "subdepartments", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "department_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["department_id"], name: "index_subdepartments_on_department_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "budgets", "subdepartments"
  add_foreign_key "departments", "hotels"
  add_foreign_key "employee_jobs", "employees"
  add_foreign_key "employee_jobs", "jobs"
  add_foreign_key "employee_roles", "employees"
  add_foreign_key "employee_roles", "hotels"
  add_foreign_key "employee_roles", "roles"
  add_foreign_key "expense_categories", "departments"
  add_foreign_key "expenses", "expense_categories"
  add_foreign_key "jobs", "subdepartments"
  add_foreign_key "roles_rights", "rights"
  add_foreign_key "roles_rights", "roles"
  add_foreign_key "subdepartments", "departments"
end
