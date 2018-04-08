class ExpenseCategory < ApplicationRecord
  belongs_to :department
  has_many :expenses
end
