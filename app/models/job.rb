class Job < ApplicationRecord
  belongs_to :department
  has_many :employee_jobs, dependent: :destroy

  validates :name, presence: { message: "Please enter the name of the job." }
  validates :pay_type, presence: { message: "Please enter a pay type"},
            inclusion: { in: %w(hourly salary)} 

end
