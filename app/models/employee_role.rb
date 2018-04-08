class EmployeeRole < ApplicationRecord
  belongs_to :employee
  belongs_to :role
  belongs_to :hotel
end
