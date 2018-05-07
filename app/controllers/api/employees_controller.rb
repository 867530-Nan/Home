class Api::EmployeesController < ApplicationController
  before_action :get_employee, only: [ :destroy, :update, :show ]
  # before_action :authenticate_user!

  def index
    @employees = current_user.visible_employees
  end 
  
  def show
    
  end
  
  def create 
    employee = Employee.create(employee_params)
    binding.pry
    if employee.save
      #HERE WE TAKE PARAMS FOR CREATING EMPLOYEE JOB(S), eventually
      # employee.employee_job.create(employee: employee, job: params[:employee][:job_id])
      #HERE WE SEND INVITATION IF A USER IS ALSO BEING CREATED
      # employee.invite_employee if params[:employee][:create_user]
      render json: employee.to_json
    else
      render_error(employee)
    end
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

  def employee_params
    params.require(:employee).permit(:first_name, :last_name, :phone_number, :email_address)
  end 

end