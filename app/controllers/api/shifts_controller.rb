class Api::ShiftsController < ApplicationController

  def index
    #EVENTUALLY MAKE THESE DYNAMIC
    start_date = Date.parse("1/1/2018")
    end_date = Date.parse("1/7/2018")
    
    managed_people = current_user.employee.visible_employees.pluck(:id)
    @shifts = Shift.joins(employee_job: :employee).where("employees.id IN (#{managed_people.join(",")})")
  end 

end 