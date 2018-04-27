class EmployeeJob < ApplicationRecord
  belongs_to :employee
  belongs_to :job

  before_validation :inherit_pay_type

  def inherit_pay_type 
    self.pay_type = self.job.pay_type if self.pay_type.nil?
  end 
end
