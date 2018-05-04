class Api::EmployeesController < ApplicationController
  before_action :get_employee, only: [ :destroy, :update, :show ]
  
  def index
    @employees = current_user.visible_employees
  end 
  
  def show
    
  end
  
  def update 
    if @employee.update(employee_params)
      render json: @employee 
    else
      render_error(@employee)
    end
  end 

  def destroy 
    @employee.destroy 
  end 


  def active_employee
    @employee = current_user.employee
  end

  private
  def get_employee 
    @employee = Employee.find(params[:id])
  end 

end