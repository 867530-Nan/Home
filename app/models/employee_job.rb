class EmployeeJob < ApplicationRecord
  belongs_to :employee
  belongs_to :job
  has_many :shifts

  before_validation :inherit_pay_type
  before_validation :inherit_pay_rate

  def inherit_pay_type 
    self.pay_type = self.job.pay_type if self.pay_type.nil?
  end 

  def inherit_pay_rate
    self.pay_rate = self.job.pay_rate if self.pay_rate.nil?
  end 

end
