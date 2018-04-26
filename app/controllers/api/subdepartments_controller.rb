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

  def create_multiple
    #takes in array of objects with department_ids and creates subdepartments
    #{name: "Concierge", amount: 1000, department_id: 2}
    date = Date.today 


  end 

  private 
  def subdepartment_params
    params.require(:subdepartment).permit(:name, :amount)

  def get_hotel
    @hotel = Hotel.find(params[:hotel_id])
  end

  def get_subdepartment
    @subdepartment = Subdepartment.find(params[:id])
  end 

  

end
