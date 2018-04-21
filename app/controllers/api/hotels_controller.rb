class Api::HotelsController < ApplicationController
  # before_action :authenticate_user!

  def index
    render json: Hotel.all
  end

  def create
    hotel = Hotel.new(hotel_params)
    if hotel.save
      render json: hotel.to_json
    else
      render_error(hotel)
    end
  end 

  private 
  def hotel_params
    params.require(:hotel).permit(:name, :phone_number, :manager_name, :number_of_rooms,
      address_attributes: [:street_one, :street_two, :city, :state, :zip, :country])
  end 

  def get_hotel
    @hotel = Hotel.find(params[:id])
  end

end
