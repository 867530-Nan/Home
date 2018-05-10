class Hotel < ApplicationRecord
  has_one :address, as: :addressable
  has_many :departments 
  has_many :employee_roles
  has_many :daily_occupancies

  validates :name, presence: { message: "Please enter the hotel name." } 
  validates :phone_number, presence: { message: "Please enter the hotel phone number" },
            length: { is: 10, message: "Phone Number must be 10 digits long." }
  validates :manager_name, presence: { message: "Please enter the hotel manager's name" }
  validates :number_of_rooms, presence: { message: "Please enter the number of rooms"},
            numericality: {only_integer: true, message: "Please enter a number"}

  accepts_nested_attributes_for :address
  
end
