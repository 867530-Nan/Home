class Api::DepartmentsController < ApplicationController
  # before_action :authenticate_user!
  before_action :get_hotel

  def index
    render json: @hotel.departments
  end

  def create
    department = @hotel.departments.create(department_params)
    if department.save
      render json: department.to_json
    else
      render_error(department)
    end
  end 

  def create_multiple
    params[:_json].each{ |name| department = @hotel.departments.create(name: name)}
    render json: @hotel.departments.to_json
  end 

  private 
  def department_params
    params.require(:department).permit(:name)
  end 

  def get_hotel
    @hotel = Hotel.find(params[:hotel_id])
  end

  def get_department
    @department = Department.find(params[:id])
  end 

  

end
