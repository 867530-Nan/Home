class Employee < ApplicationRecord
  belongs_to :user
  has_one :employee_role
  has_many :employee_jobs
  has_many :jobs, through: :employee_jobs
  has_many :departments, through: :jobs 
  has_many :hotels, through: :departments
  has_many :invitations

  validates :first_name, presence: { message: "Please enter the employee\'s first name." } 
  validates :last_name, presence: { message: "Please enter the employee\'s last name." } 
  validates :phone_number, presence: { message: "Please enter the employee\'s phone number" },
            length: { is: 10, message: "Phone Number must be 10 digits long." }

  def jobs_objects 
    self.jobs.map{|j| {department: j.department.id, title: j.name}}
  end

  def visible_departments
    self.jobs.first.department.subtree.arrange_serializable
  end 

  def visible_employees
    Employee.joins(:employee_jobs).joins(:jobs).where("jobs.department_id IN (#{self.jobs.first.department.subtree_ids.join(",")})")
  end  

  def show_departments
    self.jobs.map{|j| j.department.name}.uniq.join(",")
  end

  def hotel_id
    self.hotels.first.id
  end 

end
