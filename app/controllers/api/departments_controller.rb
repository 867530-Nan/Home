class Api::DepartmentsController < ApplicationController
  # before_action :authenticate_user!
  before_action :get_hotel

  def index
    render json: current_user.jobs.first.department.subtree.arrange_serializable
  end

  def create
    department = @hotel.departments.create(department_params)
    if department.save
      render json: department.to_json
    else
      render_error(department)
    end
  end

  # def create_multiple
  #   rv = []
  #   errors = []
  #   params[:_json].each do |name|
  #     department = Department.new(hotel: @hotel, name: name)
  #     if department.save 
  #       rv << department.to_json
  #     else 
  #       errors << department.errors.full_messages.join(",")
  #     end 
  #   end
  #   render json: {departments: rv, errors: errors}      
  # end 

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
