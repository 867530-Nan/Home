class User < ActiveRecord::Base
  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User

  has_one :employee

  def visible_employees
    Employee.joins(:employee_jobs).where("employee_jobs.department IN (#{self.jobs.first.department.subtree_ids.join(",")})")
  end
  
end
