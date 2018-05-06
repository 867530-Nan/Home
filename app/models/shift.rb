class Shift < ApplicationRecord
  belongs_to :employee_job
  has_one :employee, through: :employee_jobs
  has_one :job, through: :employee_jobs 
  
end
