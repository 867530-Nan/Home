class Department < ApplicationRecord
  belongs_to :hotel
  has_many :subdepartments
  has_many :expense_categories

  validates :name, presence: { message: "Please enter the name of the department." } 

end
