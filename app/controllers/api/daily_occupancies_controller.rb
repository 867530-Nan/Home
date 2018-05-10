class Api::DailyOccupanciesController < ApplicationController

  before_action :get_hotel, only: [:week_occupancies]

  def week_occupancies
    start_date = Date.parse(params["start_date"])
    end_date = start_date+6.days
    @week_occupancies = @hotel.daily_occupancies.where(date: (start_date..end_date)).order(:date)
    render json: @week_occupancies
  end 


  private 
  def get_hotel 
    @hotel = Hotel.find(params[:hotel_id])
  end 

  def weekly_occupancy_params
    params.require(:weekly_occupancy).permit(:rooms_occupied, :arrivals, :departures, :date)
  end 
end 
