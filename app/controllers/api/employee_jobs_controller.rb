class Api::EmployeeJobsController < ApplicationController

  def index
    managed_people = current_user.employee.visible_employees.pluck(:id) 
    @employee_jobs = EmployeeJob.joins(:employee).where("employees.id IN (#{managed_people.join(",")})")
  end 

end 
