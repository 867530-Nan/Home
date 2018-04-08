class Department < ApplicationRecord
  belongs_to :hotel
  has_many :subdepartments
  has_many :expense_categories
end
