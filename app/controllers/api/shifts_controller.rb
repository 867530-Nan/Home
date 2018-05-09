class Api::ShiftsController < ApplicationController

  def week_shifts
    start_date = Date.parse(params["start_date"])
    end_date = start_date+6.days
    
    managed_people = current_user.employee.visible_employees.pluck(:id)
    @shifts = Shift.joins(employee_job: :employee).where(shift_start: (start_date..end_date)).where("employees.id IN (#{managed_people.join(",")})")
  end 

end 