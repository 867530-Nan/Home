class Job < ApplicationRecord
  belongs_to :subdepartment
  has_many :employee_jobs
end
