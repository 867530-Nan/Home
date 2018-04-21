class Api::ExpenseCategoriesController < ApplicationController
  # before_action :authenticate_user!
  before_action :get_hotel

  def index
    render json: @hotel.expense_catgeories
  end

  def by_department
    render json: Department.find_by(params[:department_id]).expense_categories
  end 

  def create
    #  = @hotel.expense_categories.create(expense_category_params)
    # if expense_category.save
    #   render json: expense_category.to_json
    # else
    #   render_error(expense_category)
    # end
  end 

  private 
  def expense_category_params
    params.require(:expense_category).permit(:name)

  def get_hotel
    @hotel = Hotel.find(params[:hotel_id])
  end

  def get_expense_category
    @expense_category = expense_category.find(params[:id])
  end 

  

end
