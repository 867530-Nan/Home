class Api::EmployeesController < ApplicationController
  # before_action :get_employee
  
  def index

  end 
  
  def show
    
  end 

  def active_employee
    binding.pry
    @employee = User.find(params[:id]).employee
  end

  private
  def get_employee 
    @employee = Employee.find(params[:id])
  end 

end