class Employee < ApplicationRecord
  belongs_to :user
  has_one :employee_role
  has_many :employee_jobs
end
