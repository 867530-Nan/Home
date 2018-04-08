class Subdepartment < ApplicationRecord
  belongs_to :department
  has_many :jobs 
  has_many :budgets

  validates :name, presence: { message: "Please enter the name of the subdepartment." } 

end
