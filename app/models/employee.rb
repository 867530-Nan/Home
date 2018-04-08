class Employee < ApplicationRecord
  belongs_to :user
  has_one :employee_role
  has_many :employee_jobs

  validates :first_name, presence: { message: "Please enter the employee\'s first name." } 
  validates :last_name, presence: { message: "Please enter the employee\'s last name." } 
  validates :phone_number, presence: { message: "Please enter the employee\'s phone number" },
            length: { is: 10, message: "Phone Number must be 10 digits long." }


end
