class Hotel < ApplicationRecord
  has_one :address, as: :addressable
  has_many :departments 
  has_many :subdepartments, through: :departments
  has_many :employee_roles
  
end
