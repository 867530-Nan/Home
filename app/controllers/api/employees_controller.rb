class Api::EmployeesController < ApplicationController
  # before_action :get_employee
  
  def index
    render json: current_user.visible_employees
  end 
  
  def show
    
  end 

  def active_employee
    @employee = current_user.employee
  end

  private
  def get_employee 
    @employee = Employee.find(params[:id])
  end 

end