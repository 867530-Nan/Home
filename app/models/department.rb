class Department < ApplicationRecord
  has_ancestry
  
  belongs_to :hotel
  has_many :expense_categories
  has_many :jobs 
  has_many :budgets
  has_many :employee_jobs, through: :jobs 
  has_many :employees, through: :employee_jobs

  validates :name, presence: { message: "Please enter the name of the department." } 
  validates :name, uniqueness: { scope: :hotel, message: "A department with that name already exists for this hotel." }

  before_validation :inherit_hotel 

  def inherit_hotel 
    self.hotel = self.parent.hotel if self.hotel.nil? && self.parent.present?  
  end  

end
