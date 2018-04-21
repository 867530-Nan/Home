class Api::SubdepartmentsController < ApplicationController
  # before_action :authenticate_user!
  before_action :get_hotel

  def index
    render json: @hotel.subdepartments
  end

  def create
    # department = @hotel.departments.create(department_params)
    # if department.save
    #   render json: department.to_json
    else
      render_error(department)
    end
  end 

  private 
  def subdepartment_params
    params.require(:subdepartment).permit(:name)

  def get_hotel
    @hotel = Hotel.find(params[:hotel_id])
  end

  def get_subdepartment
    @subdepartment = Subdepartment.find(params[:id])
  end 

  

end
